import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/WhatsApp_Image_2025-12-11_at_16.08.50_a5f419ef_1765540048472.jpg";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src={logo} alt="Gceshi Chickens" className="h-12 w-auto object-contain rounded-full" />
          <span className="font-serif text-xl sm:text-2xl font-bold text-primary tracking-tight hidden sm:block">Gceshi Chickens</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1",
                location === link.href ? "text-primary font-bold" : "text-muted-foreground"
              )}>
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                  />
                )}
            </Link>
          ))}
          <div className="flex items-center gap-3 pl-2 border-l border-border/50">
            <ThemeToggle />
            <Link href="/order">
              <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90 text-white gap-2 shadow-md">
                <Phone className="h-4 w-4" />
                <span>Order Now</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button className="p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={cn(
                      "text-lg font-medium px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer block",
                      location === link.href ? "bg-accent/50 text-primary" : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}>
                    {link.label}
                </Link>
              ))}
              <div className="px-4 pb-2 pt-2 border-t border-border/50">
                <Link href="/order" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-secondary text-white shadow-md h-12 text-lg">Order Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
