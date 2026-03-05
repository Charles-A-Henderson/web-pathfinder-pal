import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Lock, CreditCard, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const includes = [
  "12 weeks of live instruction",
  "Comprehensive course materials",
  "Practicum with real students",
  "Lifetime alumni community access",
  "Certification credential",
  "Business launch toolkit",
];

const TeacherPay = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Dummy checkout — simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Demo Mode",
        description:
          "This is a demo checkout. Stripe integration will be connected when you're ready to go live.",
      });
    }, 2000);
  };

  return (
    <>
      <SEO
        title="Enroll & Pay — Teacher Training | The Path"
        description="Complete your enrollment in The Path's meditation teacher training program. $2,200 for the full 12-week certification."
      />
      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <Link
            to="/teacher-training"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Teacher Training
          </Link>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 sticky top-28">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Order Summary
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Meditation Teacher Training
                </p>

                <div className="space-y-3 mb-6">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-sage mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Full Program</span>
                    <span>$2,200.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Payment plans available</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-serif text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>$2,200.00</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Scholarships of up to 50% off may be available.{" "}
                  <a
                    href="mailto:training@thepath.com?subject=Scholarship%20Inquiry"
                    className="underline hover:text-foreground transition-colors"
                  >
                    Contact us
                  </a>{" "}
                  to learn more.
                </p>
              </div>
            </motion.div>

            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 order-1 lg:order-2"
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Complete Your Enrollment
              </h1>
              <p className="text-muted-foreground mb-8">
                Secure your spot in the next teacher training cohort.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                    Your Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Payment Details
                  </h3>

                  <div className="bg-muted/50 rounded-xl border border-border p-5 space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="expiry">Expiration</Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          required
                          placeholder="MM / YY"
                          maxLength={7}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleChange}
                          required
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground italic">
                      🔒 Demo mode — no real charges will be made.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isProcessing}
                  className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base h-12"
                >
                  {isProcessing ? (
                    "Processing…"
                  ) : (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Pay $2,200.00
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By completing this purchase you agree to our terms. Questions?{" "}
                  <a
                    href="mailto:training@thepath.com"
                    className="underline hover:text-foreground transition-colors"
                  >
                    training@thepath.com
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TeacherPay;
