import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255, "Email too long");

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({ title: "Invalid email", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("newsletter_signups").insert({ email: result.data });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast({ title: "Already subscribed", description: "This email is already on our list. Thank you for your interest!" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      }
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Start Your Path to Mindfulness
          </h2>
          <p className="text-primary-foreground/75 mb-8">
            Join our community and receive weekly meditation tips, event updates, and exclusive content.
          </p>

          {submitted ? (
            <p className="text-lg font-medium text-accent">
              Thank you! Check your inbox for a welcome message. 🙏
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-accent"
              />
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold whitespace-nowrap"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
