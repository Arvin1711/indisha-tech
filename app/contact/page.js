import Navbar from "@/components/Navbar";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Subscribe from "@/sections/Subscribe";

export const metadata = {
	title: "Contact — Verovio",
	description: "Contact Verovio for support, product guidance, and partnership inquiries.",
};

export default function ContactPage() {
	return (
		<>
			<Navbar />
			<Contact />
			<Subscribe />
			<Footer />
		</>
	);
}
