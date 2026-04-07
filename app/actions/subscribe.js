"use server";

import { redirect } from "next/navigation";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildAuthHeaders() {
  const apiKey = process.env.SUBSCRIBE_API_KEY;

  return {
    "Content-Type": "application/json",
    ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
  };
}

async function checkDuplicateWithEndpoint(url, email) {
  if (!url) {
    return false;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: buildAuthHeaders(),
    body: JSON.stringify({ email }),
    cache: "no-store",
  });

  if (response.status === 409) {
    return true;
  }

  if (!response.ok) {
    throw new Error(`Duplicate check failed (${response.status})`);
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    return false;
  }

  return Boolean(data?.exists || data?.duplicate || data?.alreadySubscribed);
}

async function persistToGoogleSheets(email) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const lookupUrl = process.env.GOOGLE_SHEETS_LOOKUP_WEBHOOK_URL;

  if (!webhookUrl) {
    return { configured: false, inserted: false, duplicate: false };
  }

  if (await checkDuplicateWithEndpoint(lookupUrl, email)) {
    return { configured: true, inserted: false, duplicate: true };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: buildAuthHeaders(),
    body: JSON.stringify({
      email,
      source: "website",
      subscribedAt: new Date().toISOString(),
    }),
    cache: "no-store",
  });

  if (response.status === 409) {
    return { configured: true, inserted: false, duplicate: true };
  }

  if (!response.ok) {
    throw new Error("Google Sheets persistence failed");
  }

  return { configured: true, inserted: true, duplicate: false };
}

async function persistToApi(email) {
  const apiUrl = process.env.SUBSCRIBE_API_URL;
  const checkUrl = process.env.SUBSCRIBE_API_CHECK_URL;

  if (!apiUrl) {
    return { configured: false, inserted: false, duplicate: false };
  }

  if (await checkDuplicateWithEndpoint(checkUrl, email)) {
    return { configured: true, inserted: false, duplicate: true };
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: buildAuthHeaders(),
    body: JSON.stringify({
      email,
      source: "website",
      subscribedAt: new Date().toISOString(),
    }),
    cache: "no-store",
  });

  if (response.status === 409) {
    return { configured: true, inserted: false, duplicate: true };
  }

  if (!response.ok) {
    throw new Error("API persistence failed");
  }

  return { configured: true, inserted: true, duplicate: false };
}

export async function subscribeAction(formData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();

  if (!isValidEmail(email)) {
    redirect("/?subscribe=error");
  }

  try {
    const sheetResult = await persistToGoogleSheets(email);
    const apiResult = await persistToApi(email);

    const providerConfigured = sheetResult.configured || apiResult.configured;
    const inserted = sheetResult.inserted || apiResult.inserted;
    const duplicate = sheetResult.duplicate || apiResult.duplicate;

    if (!providerConfigured) {
      throw new Error("No persistence provider configured");
    }

    if (inserted) {
      redirect("/?subscribe=success");
    }

    if (duplicate) {
      redirect("/?subscribe=exists");
    }

    throw new Error("Subscription did not persist");
  } catch (error) {
    console.error("Subscription persistence failed", error);
    redirect("/?subscribe=error");
  }
}
