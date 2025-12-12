import { Facebook, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 transition-colors duration-300">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">Gceshi Chickens</h3>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Providing healthy, well-grown broiler chickens raised with care in Makholokholo, Mbabane. Quality you can taste.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors cursor-pointer block py-1">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors cursor-pointer block py-1">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary transition-colors cursor-pointer block py-1">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors cursor-pointer block py-1">Contact</Link></li>
              <li><Link href="/order" className="text-gray-300 hover:text-primary transition-colors cursor-pointer block py-1">Order Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-gray-300">Makholokholo, Mbabane<br />Eswatini</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/26878333992" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">
                    +268 7833 3992 (WhatsApp)
                  </a>
                  <a href="https://wa.me/26876022180" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">
                    +268 7602 2180 (WhatsApp)
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Gceshi Chickens. All rights reserved.</p>
          <p className="text-xs">Designed with care for quality poultry.</p>
        </div>
      </div>
    </footer>
  );
}
