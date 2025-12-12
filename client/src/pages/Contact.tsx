import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-secondary py-24 text-center text-white">
          <div className="container px-4">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-serif font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary text-xl"
            >
              We'd love to hear from you
            </motion.p>
          </div>
        </div>

        <div className="container px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-4xl font-serif font-bold text-secondary dark:text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you want to place an order, ask a question, or visit our farm, we are here to help.
                </p>
              </div>

              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-6"
              >
                <motion.div variants={item}>
                  <Card className="hover:shadow-md transition-shadow duration-300 bg-card border-border/50">
                    <CardContent className="p-6 flex items-start gap-5">
                      <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground text-lg mb-1">Phone & WhatsApp</h3>
                        <div className="flex flex-col gap-1 mt-1">
                          <a href="https://wa.me/26878333992" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">+268 7833 3992</a>
                          <a href="https://wa.me/26876022180" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">+268 7602 2180</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="hover:shadow-md transition-shadow duration-300 bg-card border-border/50">
                    <CardContent className="p-6 flex items-start gap-5">
                      <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground text-lg mb-1">Location</h3>
                        <p className="text-muted-foreground">Makholokholo, Mbabane</p>
                        <p className="text-sm text-primary font-medium mt-1">Open daily for collections</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="hover:shadow-md transition-shadow duration-300 bg-card border-border/50">
                    <CardContent className="p-6 flex items-start gap-5">
                      <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground text-lg mb-1">Social Media</h3>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block">Facebook: Gceshi Chickens</a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block">TikTok: @GceshiChickens</a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-6 md:p-10 rounded-2xl shadow-xl border border-border/50 sticky top-24"
            >
              <h3 className="text-2xl font-serif font-bold text-card-foreground mb-8">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">First Name</label>
                    <Input placeholder="John" className="h-12 bg-background border-input focus:ring-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Last Name</label>
                    <Input placeholder="Doe" className="h-12 bg-background border-input focus:ring-primary transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Phone Number</label>
                  <Input placeholder="+268..." className="h-12 bg-background border-input focus:ring-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Message</label>
                  <Textarea placeholder="I would like to order..." className="min-h-[150px] bg-background border-input focus:ring-primary transition-colors resize-none" />
                </div>
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90 h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
