import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import product1 from "@assets/generated_images/fresh_raw_whole_chicken_on_a_wooden_board.png";
import product2 from "@assets/generated_images/close-up_of_a_healthy_white_broiler_chicken.png";

export function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Selection</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mt-2">Premium Broiler Chickens</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-xl"
          >
            <div className="aspect-[4/3] w-full">
              <img src={product1} alt="Cleaned Broiler" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">Cleaned Broilers</h3>
              <p className="text-gray-200 mb-4">Fully processed, cleaned, and ready for your pot. Perfect for immediate cooking.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-xl">E90.00</span>
                <Link href="/products">
                  <Button variant="secondary" size="sm">View Details</Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-xl"
          >
            <div className="aspect-[4/3] w-full">
              <img src={product2} alt="Live Broiler" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">Live Broilers</h3>
              <p className="text-gray-200 mb-4">Strong, healthy 6-week old broilers. Ideal for bulk buyers and fresh meat preference.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-xl">E90.00</span>
                <Link href="/products">
                  <Button variant="secondary" size="sm">View Details</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Bulk discounts available for orders of 20+ birds</p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">Place an Order</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
