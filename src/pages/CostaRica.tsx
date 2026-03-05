import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/costarica-hero.jpg";
import communityImage from "@/assets/costarica-community.jpg";
import meditationImage from "@/assets/costarica-meditation.jpg";
import founderImage from "@/assets/founder-portrait.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const CostaRica = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Costa Rica Retreat — The Path"
        description="Join Dina Kaplan for a meditation retreat in Las Catalinas, Costa Rica. Guided meditations, community, and mindful happiness in paradise."
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-16">
        <div className="w-full">
          <img
            src={heroImage}
            alt="Las Catalinas, Costa Rica — Happy Mindfulness Retreat"
            className="w-full h-[50vh] md:h-[60vh] object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* Main Content — centered, mirrors original layout */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.h1
            {...fadeUp}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Costa Rica Retreat
          </motion.h1>

          <motion.p
            {...fadeUp}
            className="text-lg md:text-xl font-semibold text-sage mb-8"
          >
            April 11th - April 14th | Las Catalinas, Costa Rica
          </motion.p>

          <motion.p
            {...fadeUp}
            className="text-muted-foreground leading-relaxed mb-10 text-lg"
          >
            Join The Path founder Dina Kaplan for a fun, relaxing meditation
            retreat in the fairy-tale-land of Las Catalinas. Enjoy expert guided
            meditations :: &amp; wisdom about cultivating joy :: while living amidst
            an Italian-style village on the beach. Together in community we'll
            calm our minds, enjoy dinners under the stars, and experience mindful
            happiness in a place that feels — like a dream.
          </motion.p>

          <motion.div {...fadeUp} className="mb-6">
            <p className="text-2xl font-semibold text-foreground mb-4">$1,800.00</p>
            <Button
              size="lg"
              className="w-full max-w-md rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold py-6"
            >
              RSVP
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Only 1 available</p>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-2 mb-12">
            <p className="text-muted-foreground italic">
              Retreat fee includes meditations, wisdom, and mindful exercises to cultivate joy.
            </p>
            <p className="text-muted-foreground italic">
              Guests are responsible for travel to Las Catalinas, meals, and lodging.
            </p>
            <p className="text-muted-foreground italic">
              Our special negotiated group rate is $244++ (nonrefundable) or $307++ (flexible).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Row */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <img src={heroImage} alt="Las Catalinas beach village" className="rounded-lg w-full h-48 md:h-64 object-cover" />
            <img src={communityImage} alt="Community meditation session" className="rounded-lg w-full h-48 md:h-64 object-cover" />
            <img src={meditationImage} alt="Morning meditation in tropical pavilion" className="rounded-lg w-full h-48 md:h-64 object-cover col-span-2 md:col-span-1" />
          </motion.div>
        </div>
      </section>

      {/* Location & Schedule */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <img
                src={meditationImage}
                alt="Afternoon meditation session"
                className="rounded-xl w-full shadow-lg"
              />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-5">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Location &amp; Schedule
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Las Catalinas is one of Dina's favorite places in the world – a
                little Italian village (modeled on Positano or Portofino) perched
                on the beach in Costa Rica (and a <strong>short drive from the
                Liberia airport</strong> so easy to reach). Our hotel is called
                Santarena.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each day includes meditation sessions in the morning and
                afternoon, with wisdom and group discussions. There will be
                plenty of free time to enjoy the beach, surfing expeditions, and
                beyond. Or to just relax – by yourself or with our kind &amp;
                mindful community!
              </p>
              <p className="text-foreground font-medium">
                We'll begin Thursday evening and close Sunday morning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp} className="space-y-5 order-2 md:order-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Community
              </h3>
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
                do the same — we're excited already!
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 md:order-2">
              <img
                src={communityImage}
                alt="Group community meditation"
                className="rounded-xl w-full shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meditations */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <img
                src={heroImage}
                alt="Walking meditation on the beach"
                className="rounded-xl w-full shadow-lg"
              />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-5">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Meditations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                During this retreat we'll step through phases of cultivating joy.
              </p>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Day 1</strong> | We'll start by
                  calming our minds, releasing circling thoughts and beginning to
                  settle into spaciousness and openness. We'll do this through a
                  series of focusing mindfulness meditations designed to bring us
                  towards stillness.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Day 2</strong> | Next we'll move
                  towards a state of non-judgement, learning and practicing how to
                  live without judging — ourselves and others. We will train our
                  minds for this through meditation and a powerful positive
                  psychology exercise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Day 3</strong> | On this day we
                  will cultivate kindness towards ourselves and others, and
                  practice a new positive psychology exercise to release lingering
                  anger, bringing us towards a state of gratitude and
                  loving-friendliness.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Day 4</strong> | On our closing
                  day, our meditations will bring us further towards openness, joy
                  and non-duality, a joyful feeling of connection with others,
                  including friends, loved ones and all living beings.
                </p>
              </div>

              <p className="text-muted-foreground italic leading-relaxed">
                You will emerge from this retreat feeling calm, centered, relaxed
                — and inspired to continue living with more ease, joy, &amp;
                delight.
              </p>
            </motion.div>
          </div>

          {/* Join Us CTA */}
          <motion.div {...fadeUp} className="text-center mt-16">
            <p className="text-lg font-semibold text-foreground mb-4">Join us:</p>
            <Button
              size="lg"
              className="w-full max-w-md rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold py-6"
            >
              RSVP
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Only 1 available</p>
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* About The Path */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <img
                src={communityImage}
                alt="Group meditating together"
                className="rounded-xl w-full shadow-lg"
              />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-5">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                About The Path
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The Path teaches meditation for the modern mind. We've taught
                thousands of people to meditate around the world, including at
                SXSW, Sundance and at events and companies across the U.S, Asia
                and Europe. The Path hosts weekly meditations, courses, retreats,
                social events, a certificate teacher training program and private
                one-on-one meditation coaching. We help you become more aware of
                yourself and your impact on others while making you happier, more
                relaxed, more focused — and better able to make decisions in all
                areas of your life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* About Dina */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp} className="space-y-5 order-2 md:order-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                About Dina Kaplan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dina is a certified meditation teacher and leads meditations
                around the world at conferences, for large and small groups,
                brands, corporations and individuals. She has studied and
                practiced dozens of meditation techniques, including Vipassana,
                Mindfulness-Based Stress Reduction, Vedic (or "mantra")
                meditation, loving-kindness or ("metta") meditation and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Before founding The Path, Dina was co-founder and COO of the tech
                start-up Blip.tv. Before Blip, Dina was an Emmy-award winning
                television news reporter. Dina was named one of Fortune
                Magazine's Most Powerful Women Entrepreneurs and Fast Company's
                Most Influential Women of Web 2.0. She has a column about
                meditation for entrepreneurs on Forbes.com.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dina has taught classes at Columbia Business School, Columbia
                Journalism School, NYU's Stern School of Business and NYU's ITP
                program. She has spoken at SXSW, the World Economic Forum,
                Fortune's Most Powerful Women Summit, TEDx Athens, and more.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 md:order-2">
              <img
                src={founderImage}
                alt="Dina Kaplan"
                className="rounded-xl w-full shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Refund Policy */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
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
