import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <ProductShowcase />
        {/* Call to Action Strip */}
        <section className="py-12 bg-primary">
          <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary">Have questions or need more info?</h2>
              <p className="text-secondary/80 font-medium mt-1">Chat with us about bulk orders, specific requirements, or general inquiries.</p>
            </div>
            <a 
              href="/contact" 
              className="bg-secondary text-white hover:bg-secondary/90 px-8 py-3 rounded-full font-bold transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
