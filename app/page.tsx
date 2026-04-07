import Features from "@/sections/Features";
import Scrolltech from "@/sections/Scrolltech";
import WorkPortfolio from "@/sections/WorkPortfolio";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Testimonials from "@/sections/Testimonials";
import Subscribe from "@/sections/Subscribe";
import Footer from "@/components/Footer";


type HomeProps = {
  searchParams?: Promise<{
    subscribe?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const subscribeStatus = resolvedSearchParams?.subscribe;

  return (
    <main>
      <Hero />
      <About />
      <WorkPortfolio />
      <Scrolltech />
      <Features />
      <Testimonials />
      <Subscribe status={subscribeStatus} />
      <Footer />
    </main>
  );
}
