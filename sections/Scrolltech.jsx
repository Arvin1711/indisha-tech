import { Component } from "lucide-react";

const techItems = [
	"IT Solution",
	"Technology",
	"Data Security",
	"Web Development",
	"Cloud Services",
	"AI & Automation",
	"Cyber Defense",
	"Digital Strategy",
];

function Separator() {
	return (
		<span aria-hidden="true" className="text-(--accent-color) text-[32px] font-light select-none">
			<Component />
		</span>
	);
}

function Track() {
	const doubled = [...techItems, ...techItems];
	return (
		<div className="scrolltech-track">
			{doubled.map((label, i) => (
				<span key={i} className="scrolltech-item12">
					<Separator />
					<span className="text-[#101526]">{label}</span>
				</span>
			))}
		</div>
	);
}

export default function Scrolltech() {
	return (
		<section className="scrolltech-shell bg-white py-14">
			<Track />
		</section>
	);
}
