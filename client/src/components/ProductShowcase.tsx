import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import product1 from "@assets/generated_images/fresh_raw_whole_chicken_on_a_wooden_board.png";
import product2 from "@assets/generated_images/close-up_of_a_healthy_white_broiler_chicken.png";

export function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Selection</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mt-2">Premium Broiler Chickens</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={product1} alt="Cleaned Broiler" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Cleaned Broilers</h3>
              <p className="text-gray-200 mb-6 opacity-90 group-hover:opacity-100 transition-opacity">Fully processed, cleaned, and ready for your pot. Perfect for immediate cooking.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-2xl">E90.00</span>
                <Link href="/products">
                  <Button variant="secondary" className="hover:bg-primary hover:text-secondary transition-colors font-semibold">View Details</Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={product2} alt="Live Broiler" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Live Broilers</h3>
              <p className="text-gray-200 mb-6 opacity-90 group-hover:opacity-100 transition-opacity">Strong, healthy 6-week old broilers. Ideal for bulk buyers and fresh meat preference.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-2xl">E90.00</span>
                <Link href="/products">
                  <Button variant="secondary" className="hover:bg-primary hover:text-secondary transition-colors font-semibold">View Details</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 text-lg">Bulk discounts available for orders of 20+ birds</p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">Place an Order</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
