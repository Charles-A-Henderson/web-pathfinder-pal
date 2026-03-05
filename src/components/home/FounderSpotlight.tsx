import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder-portrait.jpg";

const FounderSpotlight = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={founderImage}
              alt="Dina Kaplan, Founder of The Path"
              className="rounded-2xl w-full max-w-sm mx-auto shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-sage">Meet the Founder</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Dina Kaplan
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              After co-founding a successful tech startup, Dina discovered meditation during a period of intense burnout. 
              That experience transformed her life — and inspired her to create The Path, bringing accessible, 
              high-quality meditation training to individuals and organizations worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A graduate of Wesleyan University and featured in The New York Times, Forbes, and The Wall Street Journal, 
              Dina has spent over a decade making meditation approachable, impactful, and transformative 
              for thousands of students and corporate clients alike.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">Read Her Full Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSpotlight;
