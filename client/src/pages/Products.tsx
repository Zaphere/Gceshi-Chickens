import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import product1 from "@assets/generated_images/fresh_raw_whole_chicken_on_a_wooden_board.png";
import product2 from "@assets/generated_images/close-up_of_a_healthy_white_broiler_chicken.png";

const products = [
  {
    id: 1,
    name: "Cleaned Broilers",
    description: "Fully cleaned and ready for cooking. Perfect for families, events, and shops.",
    price: "E90.00",
    image: product1,
    tag: "Ready to Cook"
  },
  {
    id: 2,
    name: "Uncleaned Broilers",
    description: "Fresh, strong, healthy broilers. A great affordable option for bulk buyers.",
    price: "E90.00",
    image: product2,
    tag: "Fresh from Farm"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-secondary py-16 text-center text-white">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Products</h1>
            <p className="text-primary text-lg">Quality you can trust at prices you'll love</p>
          </div>
        </div>

        <div className="container px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg h-full flex flex-col">
                  <div className="aspect-[4/3] w-full relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full font-bold text-sm">
                      {product.tag}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl font-serif text-secondary">{product.name}</CardTitle>
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                  <CardFooter className="bg-muted/30 pt-6">
                    <Button className="w-full bg-secondary text-white hover:bg-secondary/90">Order Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center bg-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Bulk Orders</h3>
            <p className="text-muted-foreground mb-6">
              Planning a large event or stocking your shop? We offer special bulk discounts for orders of 20 or more birds.
            </p>
            <Button size="lg" className="bg-primary text-secondary font-bold hover:bg-primary/90">
              Contact for Bulk Pricing
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
