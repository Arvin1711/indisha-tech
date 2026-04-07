This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Newsletter Persistence Setup

The newsletter form submits through a Server Action in `app/actions/subscribe.js`.

Configure at least one persistence target:

```bash
# Option 1: Google Sheets webhook (for example from Apps Script web app)
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
# Optional duplicate check endpoint for Google Sheets mode
GOOGLE_SHEETS_LOOKUP_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"

# Option 2: Custom API endpoint
SUBSCRIBE_API_URL="https://your-api.example.com/subscriptions"
# Optional duplicate check endpoint for API mode
SUBSCRIBE_API_CHECK_URL="https://your-api.example.com/subscriptions/check"

# Optional: bearer token sent as Authorization header for API mode
SUBSCRIBE_API_KEY="your_api_key"
```

Notes:
- If `GOOGLE_SHEETS_WEBHOOK_URL` is set, the action will post subscription payloads to it.
- If `SUBSCRIBE_API_URL` is set, the action will also post payloads to that API.
- If a provider returns `409`, the email is treated as already subscribed.
- Optional duplicate-check endpoints can return `409` or JSON with `exists`, `duplicate`, or `alreadySubscribed` as `true`.
- If neither is configured, subscription attempts return an error state.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# indisha-tech
