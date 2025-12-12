import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Truck, Users, Leaf, BadgeDollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "Healthy Birds",
    description: "Our broilers are well-fed and raised in a clean environment to ensure maximum health and quality."
  },
  {
    icon: ShieldCheck,
    title: "Clean Environment",
    description: "We maintain strict hygiene standards in our housing to prevent disease and ensure safety."
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Prices",
    description: "Quality shouldn't break the bank. We offer the best value broilers in Mbabane at E90."
  },
  {
    icon: Truck,
    title: "Fast Service",
    description: "Reliable service whether you're buying one chicken or a bulk order for your business."
  },
  {
    icon: Users,
    title: "Community Trusted",
    description: "Proudly serving families and businesses in Makholokholo and surrounding areas since 2021."
  },
  {
    icon: CheckCircle2,
    title: "Quality Guarantee",
    description: "Consistently high-quality meat that is perfect for family meals or commercial use."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Why Choose Gceshi Chickens?</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            We take pride in our farming practices to deliver the best poultry products to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
