import Navbar from "@/components/Navbar";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Subscribe from "@/sections/Subscribe";

export const metadata = {
	title: "Our Company — aurumxai",
  description:
    "Learn how aurumxai designs and builds scalable software products for startups and enterprises.",
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
