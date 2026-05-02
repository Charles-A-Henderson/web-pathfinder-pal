import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Users, User, Mountain, Clock, Sparkles, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CoachingCheckoutDialog from "@/components/programs/CoachingCheckoutDialog";

type Audience = "all" | "aspiring-teachers" | "corporate" | "individuals";

interface Program {
  title: string;
  description: string;
  audience: Audience[];
  price: string;
  duration: string;
  icon: React.ReactNode;
  cta: string;
  link: string;
  featured?: boolean;
  tags: string[];
}

const programs: Program[] = [
  {
    title: "Meditation Teacher Training",
    description:
      "A rigorous 12-week certification blending ancient practices with modern neuroscience. Graduate ready to lead classes, workshops, and private sessions with confidence.",
    audience: ["aspiring-teachers"],
    price: "From $5,500",
    duration: "12 weeks",
    icon: <GraduationCap className="h-6 w-6" />,
    cta: "Learn More",
    link: "/teacher-training",
    featured: true,
    tags: ["Certification", "Scholarships Available"],
  },
  {
    title: "30 Days to Meditator",
    description:
      "A guided month-long journey to build a lasting meditation practice. Daily lessons, community support, and personalized feedback to make mindfulness a habit.",
    audience: ["individuals"],
    price: "$199",
    duration: "30 days",
    icon: <Clock className="h-6 w-6" />,
    cta: "Start Your Journey",
    link: "/blog",
    tags: ["Beginner-Friendly", "Self-Paced"],
  },
  {
    title: "Private Coaching",
    description:
      "One-on-one sessions with an experienced meditation teacher tailored to your goals — whether deepening an existing practice, managing stress, or exploring mindfulness for the first time.",
    audience: ["individuals"],
    price: "From $150/session",
    duration: "Ongoing",
    icon: <User className="h-6 w-6" />,
    cta: "Book a Session",
    link: "/about",
    tags: ["Personalized", "Flexible Schedule"],
  },
  {
    title: "Retreats",
    description:
      "Immersive multi-day retreats in serene locations. Disconnect from daily life and deepen your practice through guided meditation, movement, and community.",
    audience: ["individuals", "aspiring-teachers"],
    price: "From $1,200",
    duration: "3–7 days",
    icon: <Mountain className="h-6 w-6" />,
    cta: "View Upcoming",
    link: "/blog",
    tags: ["Immersive", "Small Groups"],
  },
  {
    title: "Corporate Mindfulness",
    description:
      "Workshops, offsites, and ongoing programs designed for teams. Reduce burnout, improve focus, and foster a culture of well-being at your organization.",
    audience: ["corporate"],
    price: "Custom",
    duration: "Flexible",
    icon: <Users className="h-6 w-6" />,
    cta: "Get a Proposal",
    link: "/corporate",
    tags: ["Teams", "Fortune 500 Trusted"],
  },
  {
    title: "Mindful Business Program",
    description:
      "A structured program for entrepreneurs and leaders integrating mindfulness into decision-making, leadership, and company culture.",
    audience: ["corporate", "individuals"],
    price: "From $2,500",
    duration: "8 weeks",
    icon: <Sparkles className="h-6 w-6" />,
    cta: "Learn More",
    link: "/corporate",
    tags: ["Leadership", "Executive"],
  },
];

const filters: { label: string; value: Audience }[] = [
  { label: "All Programs", value: "all" },
  { label: "Aspiring Teachers", value: "aspiring-teachers" },
  { label: "Corporate Teams", value: "corporate" },
  { label: "Individuals", value: "individuals" },
];

const ProgramsPage = () => {
  const [activeFilter, setActiveFilter] = useState<Audience>("all");
  const [coachingOpen, setCoachingOpen] = useState(false);

  const filtered =
    activeFilter === "all"
      ? programs
      : programs.filter((p) => p.audience.includes(activeFilter));

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.2em] text-primary-foreground/70 text-sm mb-4"
          >
            Programs & Offerings
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            Find Your Path
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            From beginner courses to teacher certification, we offer programs
            for every stage of your mindfulness journey.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`group relative rounded-xl border border-border bg-card p-8 flex flex-col hover:shadow-lg transition-shadow ${
                  program.featured ? "ring-2 ring-accent" : ""
                }`}
              >
                {program.featured && (
                  <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-sage/10 text-sage">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {program.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {program.price}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {program.duration}
                    </p>
                  </div>
                  {program.title === "Private Coaching" ? (
                    <Button
                      size="sm"
                      variant={program.featured ? "default" : "outline"}
                      onClick={() => setCoachingOpen(true)}
                    >
                      {program.cta}
                    </Button>
                  ) : (
                    <Button asChild size="sm" variant={program.featured ? "default" : "outline"}>
                      <Link to={program.link}>{program.cta}</Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Heart className="h-10 w-10 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground">No programs match this filter.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-2 text-sm text-accent hover:underline"
              >
                View all programs
              </button>
            </div>
          )}
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
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mb-8">
              Reach out and we'll help you find the right program for your goals
              and experience level.
            </p>
            <Button asChild size="lg">
              <a href="mailto:hello@thepath.com">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <CoachingCheckoutDialog open={coachingOpen} onOpenChange={setCoachingOpen} />
    </div>
  );
};

export default ProgramsPage;
