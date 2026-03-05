import { motion } from "framer-motion";
import { MapPin, Calendar, Sun, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/costarica-hero.jpg";
import communityImage from "@/assets/costarica-community.jpg";
import meditationImage from "@/assets/costarica-meditation.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const days = [
  {
    day: "Day 1",
    title: "Calming the Mind",
    description:
      "We'll start by calming our minds, releasing circling thoughts and beginning to settle into spaciousness and openness. We'll do this through a series of focusing mindfulness meditations designed to bring us towards stillness.",
  },
  {
    day: "Day 2",
    title: "Non-Judgement",
    description:
      "Next we'll move towards a state of non-judgement, learning and practicing how to live without judging — ourselves and others. We will train our minds for this through meditation and a powerful positive psychology exercise.",
  },
  {
    day: "Day 3",
    title: "Cultivating Kindness",
    description:
      "On this day we will cultivate kindness towards ourselves and others, and practice a new positive psychology exercise to release lingering anger, bringing us towards a state of gratitude and loving-friendliness.",
  },
  {
    day: "Day 4",
    title: "Joy & Connection",
    description:
      "On our closing day, our meditations will bring us further towards openness, joy and non-duality, a joyful feeling of connection with others, including friends, loved ones and all living beings.",
  },
];

const CostaRica = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Costa Rica Retreat — The Path"
        description="Join Dina Kaplan for a meditation retreat in Las Catalinas, Costa Rica. Guided meditations, community, and mindful happiness in paradise."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Las Catalinas, Costa Rica — an Italian-style village on the beach"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.p
            {...fadeUp}
            className="text-sm font-medium uppercase tracking-widest text-accent mb-4"
          >
            The Path Retreat
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Costa Rica Retreat
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-lg md:text-xl text-accent font-medium mb-6"
          >
            <Calendar className="h-5 w-5" />
            April 11th – April 14th
            <span className="mx-1">|</span>
            <MapPin className="h-5 w-5" />
            Las Catalinas, Costa Rica
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-primary-foreground/85 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Join The Path founder Dina Kaplan for a fun, relaxing meditation
            retreat in the fairy-tale-land of Las Catalinas. Enjoy expert guided
            meditations &amp; wisdom about cultivating joy while living amidst
            an Italian-style village on the beach.
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.4 }}>
            <Button
              size="lg"
              className="rounded-full px-10 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
            >
              RSVP — $1,800
            </Button>
            <p className="text-primary-foreground/60 text-sm mt-3 italic">
              Only a few spots remaining
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16 bg-warm">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center space-y-4">
          <motion.p {...fadeUp} className="text-muted-foreground italic leading-relaxed">
            Retreat fee includes meditations, wisdom, and mindful exercises to
            cultivate joy.
          </motion.p>
          <motion.p {...fadeUp} className="text-muted-foreground italic leading-relaxed">
            Guests are responsible for travel to Las Catalinas, meals, and
            lodging.
          </motion.p>
          <motion.p {...fadeUp} className="text-muted-foreground italic leading-relaxed">
            Our special negotiated group rate is $244++ (nonrefundable) or $307++
            (flexible).
          </motion.p>
        </div>
      </section>

      {/* Location & Schedule */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <img
                src={meditationImage}
                alt="Meditation session in an open-air tropical pavilion"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-6">
              <div className="flex items-center gap-2 text-sage">
                <MapPin className="h-5 w-5" />
                <p className="text-sm font-medium uppercase tracking-wider">
                  Location & Schedule
                </p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Las Catalinas, Costa Rica
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Las Catalinas is one of Dina's favorite places in the world — a
                little Italian village (modeled on Positano or Portofino) perched
                on the beach in Costa Rica, and a short drive from the Liberia
                airport so easy to reach. Our hotel is called Santarena.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each day includes meditation sessions in the morning and
                afternoon, with wisdom and group discussions. There will be
                plenty of free time to enjoy the beach, surfing expeditions, and
                beyond. Or to just relax — by yourself or with our kind &amp;
                mindful community!
              </p>
              <p className="text-sm font-medium text-foreground">
                We'll begin Thursday evening and close Sunday morning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="space-y-6 order-2 md:order-1">
              <div className="flex items-center gap-2 text-sage">
                <Users className="h-5 w-5" />
                <p className="text-sm font-medium uppercase tracking-wider">
                  Community
                </p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Life-Long Friendships
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Path retreats are known for fostering community, and this
                retreat will nurture a spirit of kindness, friendliness &amp;
                openness. As you meditate you become more authentic, more "you,"
                and with this, it becomes easier to connect with others on a deep
                level.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In Las Catalinas, we will live with no pretense, only the
                relaxation of being our true selves, and feeling accepted and
                supported as we are. Our retreats are renowned for forming
                life-long friendships, and we expect this Costa Rica retreat will
                do the same.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 md:order-2">
              <img
                src={communityImage}
                alt="Group meditation at sunset on a tropical terrace"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meditation Journey */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sage mb-4">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm font-medium uppercase tracking-wider">
                The Journey
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Cultivating Joy, Day by Day
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              During this retreat we'll step through phases of cultivating joy.
            </p>
          </motion.div>

          <div className="space-y-10">
            {days.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-sage">
                    {d.day.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            className="text-center text-muted-foreground italic mt-12 leading-relaxed"
          >
            You will emerge from this retreat feeling calm, centered, relaxed —
            and inspired to continue living with more ease, joy, &amp; delight.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Join Us in Paradise
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              Spots are limited. Reserve your place for an unforgettable
              experience of meditation, community, and mindful joy.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
            >
              RSVP — $1,800
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            <strong>Refund Policy:</strong> 100% refund until March 1st. 50%
            refund until April 1st. All refunds include a processing fee.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CostaRica;
