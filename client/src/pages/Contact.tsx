import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-secondary py-16 text-center text-white">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-primary text-lg">We'd love to hear from you</p>
          </div>
        </div>

        <div className="container px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Whether you want to place an order, ask a question, or visit our farm, we are here to help.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">Phone & WhatsApp</h3>
                      <p className="text-muted-foreground">+268 7833 3992</p>
                      <p className="text-muted-foreground">+268 7602 2180</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">Location</h3>
                      <p className="text-muted-foreground">Makholokholo, Mbabane</p>
                      <p className="text-sm text-muted-foreground mt-1">Open daily for collections</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">Social Media</h3>
                      <p className="text-muted-foreground">Facebook: Gceshi Chickens</p>
                      <p className="text-muted-foreground">TikTok: @GceshiChickens</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Phone Number</label>
                  <Input placeholder="+268..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Message</label>
                  <Textarea placeholder="I would like to order..." className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90 h-12 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
