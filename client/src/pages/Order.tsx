import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle2, Minus, Plus, ShoppingCart, Truck, Store } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import product1 from "@assets/generated_images/fresh_raw_whole_chicken_on_a_wooden_board.png";
import product2 from "@assets/generated_images/close-up_of_a_healthy_white_broiler_chicken.png";

const formSchema = z.object({
  productType: z.enum(["cleaned", "live"], {
    required_error: "Please select a product type.",
  }),
  quantity: z.number().min(1, "Minimum order is 1 chicken"),
  deliveryMethod: z.enum(["pickup", "delivery"], {
    required_error: "Please select a delivery method.",
  }),
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  address: z.string().optional(),
});

const PRICE_PER_UNIT = 90;
const DELIVERY_FEE = 50;

export default function Order() {
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productType: "cleaned",
      quantity: 1,
      deliveryMethod: "pickup",
      name: "",
      phone: "",
      address: "",
    },
  });

  const quantity = form.watch("quantity");
  const deliveryMethod = form.watch("deliveryMethod");
  const productType = form.watch("productType");

  const totalAmount = (quantity * PRICE_PER_UNIT) + (deliveryMethod === "delivery" ? DELIVERY_FEE : 0);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock API call
    console.log("Order Data:", values);
    const newOrderId = `ORD-${Math.floor(Math.random() * 10000)}`;
    setOrderId(newOrderId);
    setOrderComplete(true);
    
    // Simulate email sending
    console.log(`Sending email to owner with order ${newOrderId}...`);
    
    // In a real app, this would be an API call. 
    // Here we just show a toast that confirms "sending".
    
    toast({
      title: "Order Placed Successfully!",
      description: `Order #${newOrderId} has been sent to our team.`,
    });
  }

  const nextStep = async () => {
    const fields = step === 1 
      ? ["productType", "quantity", "deliveryMethod"] as const 
      : ["name", "phone", "address"] as const;
      
    const isValid = await form.trigger(fields);
    if (isValid) {
      setStep(step + 1);
      // Scroll to top of form on mobile
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow py-8 md:py-12 px-4 bg-muted/20">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary dark:text-primary mb-2">Place Your Order</h1>
            <p className="text-muted-foreground">Fresh from our farm to your table</p>
          </div>

          <AnimatePresence mode="wait">
            {!orderComplete ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Order Form */}
                  <Card className="border-none shadow-lg flex-1 order-2 lg:order-1 bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm border font-bold transition-colors ${step === 1 ? 'bg-primary text-secondary border-primary' : 'bg-muted text-muted-foreground'}`}>1</span>
                        <span className={step === 1 ? "text-card-foreground font-bold" : "text-muted-foreground"}>Order Details</span>
                        <Separator className="w-8 mx-2" />
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm border font-bold transition-colors ${step === 2 ? 'bg-primary text-secondary border-primary' : 'bg-muted text-muted-foreground'}`}>2</span>
                        <span className={step === 2 ? "text-card-foreground font-bold" : "text-muted-foreground"}>Info</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          {step === 1 && (
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="space-y-8"
                            >
                              <FormField
                                control={form.control}
                                name="productType"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-lg font-semibold text-card-foreground">Select Product</FormLabel>
                                    <FormControl>
                                      <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                      >
                                        <FormItem>
                                          <FormControl>
                                            <RadioGroupItem value="cleaned" className="peer sr-only" />
                                          </FormControl>
                                          <FormLabel className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all">
                                            <div className="w-full aspect-video rounded-lg overflow-hidden mb-3">
                                              <img src={product1} alt="Cleaned" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-xl font-bold text-card-foreground">Cleaned Broiler</span>
                                            <span className="text-primary font-bold">E{PRICE_PER_UNIT}.00</span>
                                            <span className="text-xs text-muted-foreground mt-1">Ready to cook</span>
                                          </FormLabel>
                                        </FormItem>
                                        <FormItem>
                                          <FormControl>
                                            <RadioGroupItem value="live" className="peer sr-only" />
                                          </FormControl>
                                          <FormLabel className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all">
                                            <div className="w-full aspect-video rounded-lg overflow-hidden mb-3">
                                              <img src={product2} alt="Live" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-xl font-bold text-card-foreground">Live Broiler</span>
                                            <span className="text-primary font-bold">E{PRICE_PER_UNIT}.00</span>
                                            <span className="text-xs text-muted-foreground mt-1">Fresh from farm</span>
                                          </FormLabel>
                                        </FormItem>
                                      </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-lg font-semibold text-card-foreground">Quantity</FormLabel>
                                    <div className="flex items-center gap-4">
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        className="h-12 w-12 rounded-full border-2"
                                        onClick={() => field.onChange(Math.max(1, field.value - 1))}
                                      >
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                      <FormControl>
                                        <div className="w-20 text-center text-2xl font-bold text-card-foreground">
                                          {field.value}
                                        </div>
                                      </FormControl>
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        className="h-12 w-12 rounded-full border-2"
                                        onClick={() => field.onChange(field.value + 1)}
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>
                                    <FormDescription>
                                      Orders of 20+ qualify for bulk pricing (contact us).
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="deliveryMethod"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-lg font-semibold text-card-foreground">Delivery Method</FormLabel>
                                    <FormControl>
                                      <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-2"
                                      >
                                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                                          <FormControl>
                                            <RadioGroupItem value="pickup" />
                                          </FormControl>
                                          <FormLabel className="flex-1 font-normal cursor-pointer flex items-center gap-3">
                                            <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                                              <Store className="h-5 w-5" />
                                            </div>
                                            <div className="flex flex-col">
                                              <span className="font-semibold text-card-foreground">Farm Pickup</span>
                                              <span className="text-sm text-muted-foreground">Makholokholo, Mbabane</span>
                                            </div>
                                            <span className="ml-auto font-semibold text-green-600">Free</span>
                                          </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                                          <FormControl>
                                            <RadioGroupItem value="delivery" />
                                          </FormControl>
                                          <FormLabel className="flex-1 font-normal cursor-pointer flex items-center gap-3">
                                            <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                                              <Truck className="h-5 w-5" />
                                            </div>
                                            <div className="flex flex-col">
                                              <span className="font-semibold text-card-foreground">Local Delivery</span>
                                              <span className="text-sm text-muted-foreground">Within Mbabane area</span>
                                            </div>
                                            <span className="ml-auto font-semibold text-card-foreground">E{DELIVERY_FEE}.00</span>
                                          </FormLabel>
                                        </FormItem>
                                      </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                          )}

                          {step === 2 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="space-y-6"
                            >
                              <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                  control={form.control}
                                  name="name"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-card-foreground">Full Name</FormLabel>
                                      <FormControl>
                                        <Input placeholder="John Doe" {...field} className="h-11 bg-background" />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="phone"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-card-foreground">Phone Number</FormLabel>
                                      <FormControl>
                                        <Input placeholder="+268..." {...field} className="h-11 bg-background" />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              {deliveryMethod === "delivery" && (
                                <FormField
                                  control={form.control}
                                  name="address"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-card-foreground">Delivery Address</FormLabel>
                                      <FormControl>
                                        <Input placeholder="Street name, Area, House number..." {...field} className="h-11 bg-background" />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              )}

                              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mt-6">
                                <h3 className="font-serif font-bold text-card-foreground mb-4">Payment Method</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                  Payment is required upon delivery or pickup. We accept cash and e-wallet transfers.
                                </p>
                                <div className="flex gap-2 text-sm font-medium text-card-foreground">
                                  <span className="bg-background px-3 py-1 rounded border">Cash</span>
                                  <span className="bg-background px-3 py-1 rounded border">MoMo</span>
                                  <span className="bg-background px-3 py-1 rounded border">e-Wallet</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </form>
                      </Form>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row justify-between border-t p-6 gap-4">
                      {step === 1 ? (
                        <div className="w-full flex justify-end">
                          <Button onClick={nextStep} size="lg" className="w-full md:w-auto bg-secondary text-white hover:bg-secondary/90 shadow-md">
                            Continue to Details
                          </Button>
                        </div>
                      ) : (
                        <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
                          <Button variant="outline" onClick={prevStep} size="lg" className="w-full sm:w-auto">
                            Back
                          </Button>
                          <Button onClick={form.handleSubmit(onSubmit)} size="lg" className="w-full sm:w-auto flex-1 bg-primary text-secondary hover:bg-primary/90 font-bold shadow-md">
                            Place Order
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  </Card>

                  {/* Order Summary Sidebar */}
                  <div className="lg:w-[350px] space-y-6 order-1 lg:order-2">
                    <Card className="border-none shadow-lg sticky top-24 bg-secondary text-white">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ShoppingCart className="w-5 h-5 text-primary" />
                          Order Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-start text-sm">
                          <div>
                            <span className="font-bold text-primary block text-lg">{quantity}x</span>
                            <span className="text-gray-300">{productType === "cleaned" ? "Cleaned Broiler" : "Live Broiler"}</span>
                          </div>
                          <span className="font-medium">E{quantity * PRICE_PER_UNIT}.00</span>
                        </div>
                        
                        {deliveryMethod === "delivery" && (
                          <div className="flex justify-between items-center text-sm pt-4 border-t border-white/10">
                            <span className="text-gray-300">Delivery Fee</span>
                            <span className="font-medium">E{DELIVERY_FEE}.00</span>
                          </div>
                        )}

                        <div className="pt-4 border-t border-white/20 mt-4">
                          <div className="flex justify-between items-end">
                            <span className="text-lg font-serif">Total</span>
                            <span className="text-3xl font-bold text-primary">E{totalAmount}.00</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto"
              >
                <Card className="border-none shadow-xl text-center overflow-hidden bg-card">
                  <div className="h-2 bg-primary w-full" />
                  <CardContent className="pt-12 pb-10 px-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-card-foreground mb-2">Order Received!</h2>
                    <p className="text-muted-foreground mb-8">
                      Thank you for your order. We have sent the details to our team and will contact you shortly to confirm.
                    </p>
                    
                    <div className="bg-muted/30 p-6 rounded-lg mb-8 text-left space-y-3 border border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Order ID:</span>
                        <span className="font-mono font-bold text-card-foreground">{orderId}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Amount:</span>
                        <span className="font-bold text-primary">E{totalAmount}.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 px-2 py-0.5 rounded text-xs font-medium">Pending Confirmation</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-secondary text-white hover:bg-secondary/90 shadow-md" onClick={() => window.location.reload()}>
                        Place Another Order
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => window.print()}>
                        Download Receipt
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}
