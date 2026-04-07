"use client";

import { useEffect, useState } from "react";

const productLinks = [
	{ label: "Application hosting", href: "#" },
	// { label: "Database hosting", href: "#" },
	{ label: "Static site hosting", href: "#" },
	// { label: "Pricing", href: "#" },
];
const resourceLinks = [
	// { label: "Docs", href: "#" },
	// { label: "API docs", href: "#" },
	{ label: "Blog", href: "/blog" },
	// { label: "Changelog", href: "#" },
	{ label: "Status page", href: "#" },
];
const companyLinks = [
	{ label: "About us", href: "/about" },
	// { label: "Startup program", href: "#" },
	// { label: "Agency program", href: "#" },
	{ label: "FAQs", href: "#" },
	{ label: "Contact", href: "/contact" },
];
const legalLinks = [
	{ label: "Privacy policy", href: "#" },
	{ label: "Terms of service", href: "#" },
];

const THEME_STORAGE_KEY = "indishaTech-theme-mode";

function resolveTheme(mode) {
	if (mode === "light") {
		return "light";
	}

	if (mode === "dark") {
		return "dark";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(mode) {
	const resolved = resolveTheme(mode);
	const root = document.documentElement;

	root.dataset.themeMode = mode;
	root.dataset.theme = resolved;
	root.classList.remove("theme-light", "theme-dark");
	root.classList.add(resolved === "dark" ? "theme-dark" : "theme-light");
}

function ExternalLink({ label, href = "#" }) {
	return (
		<a href={href} className="group inline-flex items-center gap-1 text-sm text-slate-300 transition hover:text-white">
			<span>{label}</span>
			<span className="text-[10px] text-slate-500 transition group-hover:text-slate-300">↗</span>
		</a>
	);
}

function SocialIcon({ children, label }) {
	return (
		<a
			href="#"
			aria-label={label}
			className="grid h-7 w-7 place-items-center rounded-md text-sm text-[#f1a45a] transition hover:bg-white/5 hover:text-[#ffbf7a]"
		>
			{children}
		</a>
	);
}

export default function Footer() {
	const [themeMode, setThemeMode] = useState("system");
	const currentYear = new Date().getFullYear();

	useEffect(() => {
		const storedThemeMode = localStorage.getItem(THEME_STORAGE_KEY) || "system";
		setThemeMode(storedThemeMode);
		applyTheme(storedThemeMode);

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemThemeChange = () => {
			if ((localStorage.getItem(THEME_STORAGE_KEY) || "system") === "system") {
				applyTheme("system");
			}
		};

		mediaQuery.addEventListener("change", handleSystemThemeChange);

		return () => {
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
		};
	}, []);

	const selectTheme = (nextMode) => {
		setThemeMode(nextMode);
		localStorage.setItem(THEME_STORAGE_KEY, nextMode);
		applyTheme(nextMode);
	};

	return (
		<footer className="bg-[#040b18] px-6 py-11 text-white sm:px-10 sm:py-12 relative">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 lg:grid-cols-[1.7fr_1fr_1fr_1fr_0.9fr] lg:gap-8">
					<section>
						<div className="flex items-center gap-3">
							<div className="grid h-11 w-11 place-items-center rounded-lg bg-(--accent-color) text-base font-extrabold text-[#101522]">L</div>
							<h2 className="text-[30px] font-semibold tracking-tight text-white">indishaTech</h2>
						</div>

						<p className="mt-6 max-w-md text-[14px] leading-7 text-slate-300">
							We are a software development company building scalable web and mobile products for startups and enterprises.
							From strategy to deployment, we help teams ship faster with confidence.
						</p>

						{/* <p className="mt-7 text-[15px] text-slate-300">
							indishaTech is your partner for product design, engineering, and long-term software growth.
						</p> */}
					</section>

					<nav>
						<h3 className="text-[16px] font-semibold text-white">Products</h3>
						<ul className="mt-5 space-y-3">
							{productLinks.map(({ label, href }) => (
								<li key={label}>
									<a href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</a>
								</li>
							))}
						</ul>
					</nav>

					<nav>
						<h3 className="text-[16px] font-semibold text-white">Resources</h3>
						<ul className="mt-5 space-y-3">
							{resourceLinks.map(({ label, href }) => (
								<li key={label}>
									<ExternalLink label={label} href={href} />
								</li>
							))}
						</ul>
					</nav>

					<nav>
						<h3 className="text-[16px] font-semibold text-white">Company</h3>
						<ul className="mt-5 space-y-3">
							{companyLinks.map(({ label, href }) => (
								<li key={label}>
									<ExternalLink label={label} href={href} />
								</li>
							))}
						</ul>
					</nav>

					<nav>
						<h3 className="text-[16px] font-semibold text-white">Legal</h3>
						<ul className="mt-5 space-y-3">
							{legalLinks.map(({ label, href }) => (
								<li key={label}>
									<ExternalLink label={label} href={href} />
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className="mt-10 flex flex-wrap items-center justify-end gap-5">
					<div className="flex items-center gap-3 hidden">
						<span className="text-base font-semibold text-white">Theme:</span>
						<div className="flex items-center gap-1.5 rounded-xl bg-[#1b2534]/75 p-1">
							<button
								type="button"
								onClick={() => selectTheme("system")}
								aria-label="Use system theme"
								className={`grid h-8 w-8 place-items-center rounded-md text-xs transition ${
									themeMode === "system" ? "bg-[#2b3a52] text-(--accent-color)" : "text-slate-300 hover:bg-[#26354d]"
								}`}
							>
								▣
							</button>
							<button
								type="button"
								onClick={() => selectTheme("light")}
								aria-label="Use light theme"
								className={`grid h-8 w-8 place-items-center rounded-md text-xs transition ${
									themeMode === "light" ? "bg-[#2b3a52] text-(--accent-color)" : "text-slate-300 hover:bg-[#26354d]"
								}`}
							>
								☼
							</button>
							<button
								type="button"
								onClick={() => selectTheme("dark")}
								aria-label="Use dark theme"
								className={`grid h-8 w-8 place-items-center rounded-md text-xs transition ${
									themeMode === "dark" ? "bg-[#2b3a52] text-(--accent-color)" : "text-slate-300 hover:bg-[#26354d]"
								}`}
							>
								◐
							</button>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<p className="text-base font-semibold text-white">Follow us on:</p>
						<div className="flex items-center gap-1">
							<SocialIcon label="X">X</SocialIcon>
							<SocialIcon label="Discord">◉</SocialIcon>
							<SocialIcon label="YouTube">▶</SocialIcon>
						</div>
					</div>
				</div>

				<div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-[#1b2b40] pt-6">
					<p className="text-[12px] text-slate-400">
						© 2024 - {currentYear} indishaTech, Inc. All rights reserved. indishaTech and Sevalla are registered trademarks.
					</p>

					{/* <div className="inline-flex items-center gap-2 rounded-full border border-[#2a3d56] bg-[#0a1424] px-4 py-1.5 text-sm text-slate-200">
						<span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
						<span>All Systems Operational</span>
					</div> */}
				</div>
			</div>
		</footer>
	);
}
