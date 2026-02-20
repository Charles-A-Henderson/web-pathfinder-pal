import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const inquirySchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(100),
  last_name: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(200),
  team_size: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [teamSize, setTeamSize] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);

    const raw = {
      first_name: (fd.get("first_name") as string) || "",
      last_name: (fd.get("last_name") as string) || "",
      email: (fd.get("email") as string) || "",
      company: (fd.get("company") as string) || "",
      team_size: teamSize || undefined,
      message: (fd.get("message") as string) || undefined,
    };

    const result = inquirySchema.safeParse(raw);
    if (!result.success) {
      toast({ title: "Validation error", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }

    const insertData = {
      first_name: result.data.first_name,
      last_name: result.data.last_name,
      email: result.data.email,
      company: result.data.company,
      team_size: result.data.team_size ?? null,
      message: result.data.message ?? null,
    };

    setLoading(true);
    const { error } = await supabase.from("corporate_inquiries").insert([insertData]);
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast({ title: "Already received", description: "We already have an inquiry from this email. We'll be in touch soon!" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      }
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Your Program
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every organization is different. Tell us about your team, and we'll design a mindfulness program that fits your culture, goals, and budget.
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Quick response</p>
                <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Free consultation</p>
                <p className="text-sm text-muted-foreground">30-minute call to understand your needs — no commitment required.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Custom proposals</p>
                <p className="text-sm text-muted-foreground">We'll send a tailored proposal with pricing, timeline, and program structure.</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Prefer email? Reach us at{" "}
              <a href="mailto:corporate@thepath.com" className="text-sage underline hover:text-sage/80 transition-colors">
                corporate@thepath.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-sage/10 rounded-2xl p-10 text-center">
                <p className="font-serif text-2xl font-bold text-foreground mb-3">Thank you! 🙏</p>
                <p className="text-muted-foreground">We've received your inquiry and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                    <Input name="first_name" placeholder="Jane" required maxLength={100} className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                    <Input name="last_name" placeholder="Smith" required maxLength={100} className="rounded-lg" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Work Email</label>
                  <Input name="email" type="email" placeholder="jane@company.com" required maxLength={255} className="rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                  <Input name="company" placeholder="Acme Corp" required maxLength={200} className="rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Team Size</label>
                  <Select value={teamSize} onValueChange={setTeamSize}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-50">10–50 people</SelectItem>
                      <SelectItem value="50-200">50–200 people</SelectItem>
                      <SelectItem value="200-500">200–500 people</SelectItem>
                      <SelectItem value="500+">500+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">What are you looking for?</label>
                  <Textarea name="message" placeholder="Tell us about your goals, timeline, and any specific needs..." rows={4} maxLength={2000} className="rounded-lg" />
                </div>

                <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full bg-sage text-sage-foreground hover:bg-sage/90 font-semibold">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Inquiry"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
