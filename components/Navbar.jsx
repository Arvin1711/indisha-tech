"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Product", href: "/product/portfolio-dashboard" },
	{ label: "About Us", href: "/about" },
	{ label: "Resources", href: "/resources" },
];

const navDropdownItems = {
	Product: [
		{ icon: "📊", text: "Portfolio Dashboard", href: "/product/portfolio-dashboard" },
		{ icon: "🛡", text: "Design", href: "/product/risk-monitoring" },
		{ icon: "⚡", text: "Mobile Apps", href: "/product/auto-rebalancing" },
		{ icon: "⚡", text: "Business Apps", href: "/product/auto-rebalancing" },
	],
	"About Us": [
		{ icon: "🏢", text: "Our Company", href: "/about" },
		{ icon: "👥", text: "Leadership Team", href: "/about/members" },
		{ icon: "🌍", text: "Mission and Values", href: "/about/mission" },
	],
	"Resources": [
		{ icon: "📈", text: "Gallery", href: "/resources/gallery" },
		{ icon: "🔔", text: "Blog", href: "/resources/blog" },
		{ icon: "🔐", text: "News", href: "/resources/news" },
	],
};

function getIsActive(item, pathname) {
	if (item.label === "Home") return pathname === "/";
	if (item.label === "Product") return pathname.startsWith("/product");
	if (item.label === "About Us") return pathname.startsWith("/about");
	if (item.label === "Resources") return pathname.startsWith("/resources");
	return false;
}

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const pathname = usePathname();

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Close drawer on route change
	useEffect(() => {
		setIsMenuOpen(false);
		setOpenDropdown(null);
	}, [pathname]);

	// Lock body scroll when drawer is open
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 z-60 flex items-center justify-between gap-4 px-4 py-3 backdrop-blur-sm transition-all duration-300 sm:px-8 lg:px-10 ${isScrolled
						? "border-b border-white/70 bg-white/85 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.25)]"
						: "border-b border-transparent bg-transparent shadow-none"
					}`}
			>
				{/* Hamburger — mobile only */}
				<button
					onClick={() => setIsMenuOpen(true)}
					className="grid h-9 w-9 place-items-center rounded-lg text-[#3a3f50] transition hover:bg-black/5 lg:hidden"
					aria-label="Open menu"
				>
					<Menu size={22} />
				</button>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-7 lg:flex">
					{navItems.map((item) => {
						const dropdownItems = navDropdownItems[item.label];
						const hasDropdown = Array.isArray(dropdownItems);
						const isActive = getIsActive(item, pathname);

						if (!hasDropdown) {
							return (
								<Link
									key={item.label}
									href={item.href ?? "#"}
									className={`inline-flex items-center gap-1 text-[14px] font-medium ${isActive ? "text-(--accent-color)" : "text-[#8d93a1] hover:text-[#2e3240]"}`}							>
									<span>{item.label}</span>
								</Link>
							);
						}
						return (
							<div key={item.label} className="group relative">
								<Link
									href={item.href ?? "#"}
									className={`inline-flex items-center gap-1 text-[14px] font-medium transition ${isActive ? "text-(--accent-color)" : "text-[#8d93a1] hover:text-[#2e3240]"}`}
								>
									<span>{item.label}</span>
									<span className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
										<ChevronDown size={14} />
									</span>
								</Link>

								<div className="pointer-events-none absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
									<div className="min-w-56 rounded-2xl border border-[#eceff4] bg-white p-2 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.45)]">
										{dropdownItems.map((dropdownItem) => (
											<Link
												key={dropdownItem.text}
												href={dropdownItem.href ?? "#"}
												className="flex items-center gap-3 rounded-xl px-3 py-2 text-[13px] text-[#4d5465] transition hover:bg-[#f8f9fb] hover:text-[#1e2330]"
											>
												<span className="grid h-7 w-7 place-items-center rounded-full bg-[#fff3ea] text-[13px]">
													{dropdownItem.icon}
												</span>
												<span className="font-medium">{dropdownItem.text}</span>
											</Link>
										))}
									</div>
								</div>
							</div>
						);
					})}
				</nav>

				{/* Logo */}
				{/* <Image
						src="/images/logo.png"
						alt="IndishaTech"
						width={130}
						height={50}
						className="h-9 w-auto object-contain"
					/> */}
				<div className="text-[34px] font-semibold tracking-[-0.05em] text-[#0b0d14] sm:text-[42px]">
					indishaTech
				</div>

				{/* CTA buttons */}
				<div className="flex items-center gap-2 sm:gap-3">
					<Link href="#" className="invisible">
						<span>Get started</span>
						<span aria-hidden="true">
							<ChevronRight size={16} />
						</span>
					</Link>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 rounded-full bg-(--accent-color) px-4 py-2 text-[14px] font-medium text-white shadow-[0_20px_35px_-22px_rgba(240,140,84,0.9)] sm:px-5"
					>
						<span className="hidden sm:inline">Get started</span>
						<span aria-hidden="true">
							<ChevronRight size={16} />
						</span>
					</Link>
				</div>
			</header>

			{/* Backdrop */}
			<div
				onClick={() => setIsMenuOpen(false)}
				className={`fixed inset-0 z-70 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
				aria-hidden="true"
			/>

			{/* Drawer panel */}
			<div
				className={`fixed inset-y-0 left-0 z-80 flex w-72 flex-col bg-white shadow-[4px_0_40px_-8px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
			>
				{/* Drawer header */}
				<div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
					{/* <Image
						src="/images/logo.png"
						alt="IndishaTech"
						width={130}
						height={50}
						className="h-9 w-auto object-contain"
					/> */}
					<div className="text-[34px] font-semibold tracking-[-0.05em] text-[#0b0d14] sm:text-[42px]">
						indishaTech
					</div>
					<button
						onClick={() => setIsMenuOpen(false)}
						className="grid h-8 w-8 place-items-center rounded-lg text-[#8d93a1] transition hover:bg-[#f5f6f8] hover:text-[#2e3240]"
						aria-label="Close menu"
					>
						<X size={20} />
					</button>
				</div>

				{/* Nav items */}
				<nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
					{navItems.map((item) => {
						const dropdownItems = navDropdownItems[item.label];
						const hasDropdown = Array.isArray(dropdownItems);
						const isActive = getIsActive(item, pathname);
						const isOpen = openDropdown === item.label;

						if (!hasDropdown) {
							return (
								<Link
									key={item.label}
									href={item.href ?? "#"}
									className={`flex items-center rounded-xl px-3 py-2.5 text-[14px] font-medium transition ${isActive
											? "bg-[#fff4eb] text-(--accent-color)"
											: "text-[#4d5465] hover:bg-[#f5f6f8] hover:text-[#1e2330]"
										}`}
								>
									{item.label}
								</Link>
							);
						}

						return (
							<div key={item.label}>
								<button
									onClick={() => setOpenDropdown(isOpen ? null : item.label)}
									className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-medium transition ${isActive
											? "bg-[#fff4eb] text-(--accent-color)"
											: "text-[#4d5465] hover:bg-[#f5f6f8] hover:text-[#1e2330]"
										}`}
								>
									<span>{item.label}</span>
									<ChevronDown
										size={15}
										className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
									/>
								</button>

								{/* Accordion dropdown */}
								<div
									className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
										}`}
								>
									<div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-[#f0c89a] pl-3 pb-1">
										{dropdownItems.map((dropdownItem) => (
											<Link
												key={dropdownItem.text}
												href={dropdownItem.href ?? "#"}
												className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[13px] text-[#4d5465] transition hover:bg-[#f8f9fb] hover:text-[#1e2330]"
											>
												<span>{dropdownItem.icon}</span>
												<span className="font-medium">{dropdownItem.text}</span>
											</Link>
										))}
									</div>
								</div>
							</div>
						);
					})}
				</nav>

				{/* Drawer footer CTA */}
				<div className="border-t border-[#f0f2f5] px-5 py-5">
					<Link
						href="/contact"
						className="flex items-center justify-center gap-2 rounded-full bg-(--accent-color) px-4 py-2.5 text-[14px] font-medium text-white shadow-[0_12px_24px_-16px_rgba(240,140,84,0.8)] transition hover:bg-[#e98147]"
					>
						<span>Get started</span>
						{/* <ChevronRight size={16} /> */}
					</Link>
				</div>
			</div>
		</>
	);
}
