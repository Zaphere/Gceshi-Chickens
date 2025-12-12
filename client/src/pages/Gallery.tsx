import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import img1 from "@assets/generated_images/black_farmer_inspecting_broiler_chickens_in_a_clean_coop.png";
import img2 from "@assets/generated_images/close-up_of_a_healthy_white_broiler_chicken.png";
import img3 from "@assets/generated_images/fresh_raw_whole_chicken_on_a_wooden_board.png";
import img5 from "@assets/generated_images/happy_black_farmer_holding_a_chicken.png";
import logo from "@assets/WhatsApp_Image_2025-12-11_at_16.08.50_a5f419ef_1765540048472.jpg";

const images = [
  { src: img1, caption: "Our Farm Inspection" },
  { src: img2, caption: "Healthy Broilers" },
  { src: img3, caption: "Fresh Quality Products" },
  { src: img5, caption: "Our Team" },
  { src: logo, caption: "Gceshi Chickens" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-secondary py-16 text-center text-white">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gallery</h1>
            <p className="text-primary text-lg">A glimpse into our farm and daily operations</p>
          </div>
        </div>

        <div className="container px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
