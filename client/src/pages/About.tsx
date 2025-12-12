import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import aboutImage from "@assets/generated_images/happy_black_farmer_holding_a_chicken.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-secondary py-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-primary text-xl font-medium tracking-wide"
            >
              Dedicated to Quality Since 2021
            </motion.p>
          </div>
        </div>

        <div className="container px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 border-2 border-primary rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <img 
                  src={aboutImage} 
                  alt="Farmer" 
                  className="rounded-xl shadow-2xl relative z-10 w-full" 
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Our Story</h2>
                <div className="h-1 w-20 bg-primary mb-6" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Founded in 2021, Gceshi Chickens is a local poultry business dedicated to providing quality broilers for families, shops, and events.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  We maintain a clean environment and proper nutrition to ensure every chicken is healthy and ready for sale. Our passion for poultry farming drives us to deliver the best products to the Mbabane community.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Our Mission</h3>
                <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary shadow-sm">
                  <p className="font-medium text-secondary-foreground italic text-lg leading-relaxed">
                    "To deliver fresh, healthy, and affordable broiler chickens to the Mbabane community and surrounding areas."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {['Quality', 'Cleanliness', 'Affordability', 'Customer Care'].map((val, idx) => (
                  <motion.div 
                    key={val} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="flex items-center gap-3 text-secondary font-bold"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20" />
                    {val}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
