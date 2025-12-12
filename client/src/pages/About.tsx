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
        <div className="bg-secondary py-20 text-center text-white">
          <div className="container px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold mb-4"
            >
              About Us
            </motion.h1>
            <p className="text-primary text-lg font-medium">Dedicated to Quality Since 2021</p>
          </div>
        </div>

        <div className="container px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-primary rounded-xl translate-x-4 translate-y-4" />
                <img 
                  src={aboutImage} 
                  alt="Farmer" 
                  className="rounded-xl shadow-2xl relative z-10 w-full" 
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-secondary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Founded in 2021, Gceshi Chickens is a local poultry business dedicated to providing quality broilers for families, shops, and events.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We maintain a clean environment and proper nutrition to ensure every chicken is healthy and ready for sale. Our passion for poultry farming drives us to deliver the best products to the Mbabane community.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Our Mission</h3>
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <p className="font-medium text-secondary-foreground italic">
                    "To deliver fresh, healthy, and affordable broiler chickens to the Mbabane community and surrounding areas."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {['Quality', 'Cleanliness', 'Affordability', 'Customer Care'].map((val) => (
                  <div key={val} className="flex items-center gap-2 text-secondary font-bold">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {val}
                  </div>
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
