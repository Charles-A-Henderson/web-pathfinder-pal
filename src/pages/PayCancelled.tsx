import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PayCancelled = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Payment Cancelled" description="Your payment was not completed." />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-6">
            <XCircle className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            No Charge Made
          </h1>
          <p className="text-muted-foreground mb-8">
            Your payment was cancelled and no money was taken. You can try again
            anytime, or reach out if you'd like to talk first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/programs">Back to Programs</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:sit@thepath.com">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PayCancelled;
