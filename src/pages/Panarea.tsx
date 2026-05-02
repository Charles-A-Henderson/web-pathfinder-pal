import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import founderImage from "@/assets/founder-portrait.jpg";
import panareaHero from "@/assets/panarea/panarea-hero.jpg";
import panareaMeditation from "@/assets/panarea/panarea-meditation.jpg";
import panareaCliffs from "@/assets/panarea/panarea-cliffs.jpg";
import panareaBoat from "@/assets/panarea/panarea-boat.jpg";
import panareaDinner from "@/assets/panarea/panarea-dinner-group.jpg";
import panareaVillage from "@/assets/panarea/panarea-village.jpg";
import panareaGroup from "@/assets/panarea/panarea-group.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const RSVP_HREF =
  "mailto:sit@thepath.com?subject=Panarea%20Retreat%202026%20RSVP";

const Panarea = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Panarea Retreat 2026 — The Path"
        description="Join Dina Kaplan for a meditation retreat in Panarea, Italy in July 2026. Guided meditations, dinners under the stars, and mindful joy in the Mediterranean."
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-16">
        <div className="w-full relative">
          <img
            src={panareaHero}
            alt="Panarea, Italy — Mediterranean island at golden hour"
            className="w-full h-[55vh] md:h-[70vh] object-cover"
            loading="eager"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 lg:px-8 pb-10 md:pb-16">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[0.25em] text-primary-foreground/80 text-xs md:text-sm mb-3"
              >
                Featured Retreat
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground max-w-3xl leading-tight"
              >
                Panarea Retreat 2026
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.p
            {...fadeUp}
            className="text-lg md:text-xl font-semibold text-sage mb-8"
          >
            July 2026 | Panarea, Italy
          </motion.p>

          <motion.p
            {...fadeUp}
            className="text-muted-foreground leading-relaxed mb-10 text-lg"
          >
            Join The Path founder/CEO and expert meditation teacher Dina Kaplan
            for a fun, relaxing meditation retreat in her all-time favorite
            place in the world, Panarea. This retreat is focused on cultivating
            joy, and together in community you will enjoy guided meditations to
            calm, clear and inspire your mind, dinners under the stars, and the
            joy of living amidst the sparkling Mediterranean Sea — in a place
            that feels like living in a fairytale.
          </motion.p>

          <motion.div {...fadeUp} className="mb-6">
            <p className="text-2xl font-semibold text-foreground mb-4">$2,200.00</p>
            <Button
              asChild
              size="lg"
              className="w-full max-w-md rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold py-6"
            >
              <a href={RSVP_HREF}>RSVP</a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Limited spots available</p>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-2 mb-12">
            <p className="text-muted-foreground italic">
              Includes meditations, breakfasts, dinners, and mindful exercises
              to cultivate joy.
            </p>
            <p className="text-muted-foreground italic">
              Daily activities include a private boat tour with a captain,
              hiking, snorkeling and more.
            </p>
            <p className="text-muted-foreground italic">
              Guests are responsible for travel, lunches, and lodging. Staff and
              most guests will stay at Hotel La Piazza, but you can stay at any
              hotel on Panarea.
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
            <img
              src={panareaCliffs}
              alt="Crystal-clear water around volcanic cliffs of Panarea"
              className="rounded-lg w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
            <img
              src={panareaMeditation}
              alt="Group meditating at sunset overlooking the Mediterranean"
              className="rounded-lg w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
            <img
              src={panareaGroup}
              alt="The Path retreat group at sunset overlooking the Mediterranean in Panarea"
              className="rounded-lg w-full h-48 md:h-64 object-cover col-span-2 md:col-span-1"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Location & Schedule */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <img
                src={panareaBoat}
                alt="Wooden boat on turquoise water near volcanic cliffs"
                className="rounded-xl w-full shadow-lg"
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-5">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Location &amp; Schedule
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Panarea is the smallest and most enchanting of the Aeolian
                Islands — a tiny, car-free Italian island floating in the
                sparkling Mediterranean off the coast of Sicily. Whitewashed
                villas, bougainvillea-lined paths, and crystal-clear coves make
                it Dina's all-time favorite place in the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each day includes meditation sessions in the morning and
                afternoon, with wisdom and group discussions. Plenty of free
                time to swim, snorkel, hike, or simply relax with our kind and
                mindful community.
              </p>
              <p className="text-foreground font-medium">
                We'll begin with a welcome dinner and close with a final
                meditation by the sea.
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
                retreat will nurture a spirit of kindness, friendliness and
                openness. As you meditate you become more authentic, more
                "you," and with this, it becomes easier to connect with others
                on a deep level.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On Panarea, we will live with no pretense — only the relaxation
                of being our true selves, accepted and supported as we are. Our
                retreats are renowned for forming life-long friendships, and we
                expect this Panarea retreat will do the same.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 md:order-2">
              <img
                src={panareaDinner}
                alt="Candlelit dinner under the stars on a Mediterranean terrace"
                className="rounded-xl w-full shadow-lg"
                loading="lazy"
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
                src={panareaMeditation}
                alt="Sunset meditation overlooking the Mediterranean"
                className="rounded-xl w-full shadow-lg"
                loading="lazy"
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
                  <strong className="text-foreground">Day 1</strong> | We'll
                  start by calming our minds, releasing circling thoughts and
                  beginning to settle into spaciousness and openness through a
                  series of focusing mindfulness meditations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Day 2</strong> | Next
                  we'll move towards a state of non-judgement, learning to live
                  without judging — ourselves and others — through meditation
                  and a powerful positive psychology exercise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Day 3</strong> | We'll
                  cultivate kindness towards ourselves and others, releasing
                  lingering anger and moving towards gratitude and
                  loving-friendliness.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Day 4</strong> | On our
                  closing day, our meditations bring us further towards
                  openness, joy and a felt sense of connection with all living
                  beings.
                </p>
              </div>

              <p className="text-muted-foreground italic leading-relaxed">
                You'll emerge from this retreat feeling calm, centered, relaxed
                — and inspired to continue living with more ease, joy and
                delight.
              </p>
            </motion.div>
          </div>

          {/* Join Us CTA */}
          <motion.div {...fadeUp} className="text-center mt-16">
            <p className="text-lg font-semibold text-foreground mb-4">Join us:</p>
            <Button
              asChild
              size="lg"
              className="w-full max-w-md rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold py-6"
            >
              <a href={RSVP_HREF}>RSVP</a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Limited spots available</p>
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
                src={panareaCliffs}
                alt="Volcanic coves of the Aeolian Islands"
                className="rounded-xl w-full shadow-lg"
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-5">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                About The Path
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The Path teaches meditation for the modern mind. We've taught
                thousands of people to meditate around the world, including at
                SXSW, Sundance, and at events and companies across the U.S.,
                Asia and Europe. The Path hosts weekly meditations, courses,
                retreats, social events, a certificate teacher training program
                and private one-on-one meditation coaching.
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
                brands, corporations and individuals. She has studied dozens of
                meditation techniques, including Vipassana,
                Mindfulness-Based Stress Reduction, Vedic ("mantra")
                meditation, and loving-kindness ("metta") meditation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A Wesleyan graduate, Dina was previously co-founder and COO of
                Blip.tv, and before that an Emmy-award winning television news
                reporter. She has been named one of Fortune's Most Powerful
                Women Entrepreneurs and Fast Company's Most Influential Women
                of Web 2.0.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dina has spoken at SXSW, the World Economic Forum, Fortune's
                Most Powerful Women Summit, TEDx Athens, and more.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 md:order-2">
              <img
                src={founderImage}
                alt="Dina Kaplan"
                className="rounded-xl w-full shadow-lg"
                loading="lazy"
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
            <strong>Refund Policy:</strong> 100% refund until 90 days before
            the retreat. 50% refund until 30 days before. All refunds include a
            processing fee.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Panarea;
