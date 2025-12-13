import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/homepage_hero.jpg";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Poultry Farm"
          className="w-full h-full object-cover md:object-bottom"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </motion.div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block py-2 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold uppercase tracking-widest backdrop-blur-md"
          >
            Premium Poultry Farm • Est. 2021
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
            Where Poultry <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary bg-[length:200%_auto] animate-gradient">
              Perfection Begins
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Providing healthy, well-grown broiler chickens raised with care in Makholokholo, Mbabane.
            <span className="block mt-2 font-medium text-white">Fresh • Affordable • Trusted • Delivery for Bulk Buyers</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold text-lg px-10 h-16 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1">
                View Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-secondary font-bold text-lg px-10 h-16 rounded-full backdrop-blur-sm transition-all hover:-translate-y-1">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
