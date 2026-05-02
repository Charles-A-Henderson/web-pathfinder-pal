import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// TODO: Replace with your real Calendly URL when ready
const CALENDLY_URL = "https://calendly.com/your-link-here";

const PaySuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Payment Confirmed" description="Thank you for your purchase." />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full text-center"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sage/10 mb-6">
            <CheckCircle2 className="h-8 w-8 text-sage" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Thank You
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Your payment was received and your coaching package is confirmed.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            A receipt has been sent to your email.
          </p>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8 text-left">
            <h2 className="font-serif text-xl text-foreground mb-2 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Schedule Your First Session
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Pick a time that works for you — book directly through our calendar below.
            </p>
            <Button asChild size="lg" className="w-full">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Time
              </a>
            </Button>
            <div className="flex items-center gap-2 justify-center mt-5 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>
                Questions? Email{" "}
                <a
                  href="mailto:sit@thepath.com"
                  className="text-accent hover:underline"
                >
                  sit@thepath.com
                </a>
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Button asChild variant="ghost">
              <Link to="/programs">← Back to Programs</Link>
            </Button>
          </div>

          {sessionId && (
            <p className="text-xs text-muted-foreground/60 mt-6">
              Reference: {sessionId.slice(0, 16)}…
            </p>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PaySuccess;
