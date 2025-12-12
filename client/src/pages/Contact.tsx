import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";

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

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", values);

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-card-foreground">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="h-12 bg-background border-input focus:ring-primary transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-card-foreground">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="h-12 bg-background border-input focus:ring-primary transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-card-foreground">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+268..." {...field} className="h-12 bg-background border-input focus:ring-primary transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-card-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="I would like to order..." {...field} className="min-h-[150px] bg-background border-input focus:ring-primary transition-colors resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white hover:bg-secondary/90 h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
