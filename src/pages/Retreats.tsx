import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import panareaHero from "@/assets/panarea/panarea-hero.jpg";
import crGroupSunset from "@/assets/cr-group-sunset.jpg";

const retreats = [
  {
    slug: "/panarea",
    title: "Panarea Retreat 2026",
    date: "July 2026",
    location: "Panarea, Italy",
    image: panareaHero,
    blurb:
      "A joy-focused meditation retreat with Dina Kaplan on her favorite island in the world. Guided practice, dinners under the stars, and the sparkling Mediterranean.",
    price: "$2,200",
    featured: true,
  },
  {
    slug: "/costarica",
    title: "Costa Rica Retreat",
    date: "April 11–14",
    location: "Las Catalinas, Costa Rica",
    image: crGroupSunset,
    blurb:
      "A fairytale Italian-style village on the beach in Costa Rica. Calm the mind, enjoy dinners under the stars, and experience mindful happiness in paradise.",
    price: "$1,800",
  },
];

const Retreats = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Retreats — The Path"
        description="Immersive meditation retreats with Dina Kaplan in extraordinary places. Panarea, Italy and Las Catalinas, Costa Rica."
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.2em] text-primary-foreground/70 text-sm mb-4"
          >
            Retreats
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            Step away. Come home to yourself.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80"
          >
            Immersive multi-day retreats in extraordinary places, led by Dina
            Kaplan and The Path community.
          </motion.p>
        </div>
      </section>

      {/* Retreat cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {retreats.map((r, i) => (
              <motion.article
                key={r.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-xl overflow-hidden border border-border bg-card flex flex-col hover:shadow-xl transition-shadow"
              >
                <Link to={r.slug} className="relative block overflow-hidden">
                  <img
                    src={r.image}
                    alt={`${r.title} — ${r.location}`}
                    className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {r.featured && (
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                  )}
                </Link>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-sage" />
                      {r.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-sage" />
                      {r.location}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {r.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {r.blurb}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">
                      From {r.price}
                    </p>
                    <Button asChild size="sm">
                      <Link to={r.slug}>
                        Learn More
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-warm py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Questions about a retreat?
            </h2>
            <p className="text-muted-foreground mb-8">
              Reach out and we'll help you find the right one for you.
            </p>
            <Button asChild size="lg">
              <a href="mailto:sit@thepath.com?subject=Retreat%20Inquiry">
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retreats;
