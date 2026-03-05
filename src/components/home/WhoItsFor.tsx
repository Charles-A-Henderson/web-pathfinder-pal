import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: GraduationCap,
    title: "Learn to Guide",
    description: "Go deeper on your practice and share with others — in our world-renowned certificate Meditation Teacher Training program (3 months). Join 1,000+ graduates teaching worldwide.",
    cta: "Explore MTT",
    href: "/teacher-training",
  },
  {
    icon: Building2,
    title: "Corporate Teams",
    description: "Reduce burnout, improve focus, and build resilience in your teams by bringing mindfulness to your workplace. Learn tools to reduce stress, increase productivity and enhance teamwork. Trusted by Fortune 500 companies.",
    cta: "Book a Session",
    href: "/corporate",
  },
  {
    icon: Heart,
    title: "Individual Learners",
    description: "Begin or deepen your personal meditation practice with guided courses, private coaching, and transformative retreats designed for every level.",
    cta: "Start Your Journey",
    href: "/programs",
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Path
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you want to teach, transform your team, or start a personal practice — we have a path for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-colors">
                <item.icon className="h-7 w-7 text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.description}</p>
              <Button asChild variant="outline" className="rounded-full">
                <Link to={item.href}>{item.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
