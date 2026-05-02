import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import panareaHero from "@/assets/panarea/panarea-hero.jpg";

const PanareaBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={panareaHero}
          alt="Panarea, Italy at golden hour"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-primary-foreground"
          >
            <p className="uppercase tracking-[0.25em] text-primary-foreground/80 text-xs mb-3">
              Featured Retreat
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold leading-tight mb-2">
              Panarea, Italy — July 2026
            </h2>
            <p className="text-primary-foreground/85 max-w-xl text-sm md:text-base">
              A meditation retreat with Dina Kaplan in her favorite place in
              the world. Guided practice, dinners under the stars, and the
              sparkling Mediterranean.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="shrink-0"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <Link to="/panarea">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PanareaBanner;
