import { motion } from "framer-motion";

const PositioningStatement = () => {
  return (
    <section className="py-20 bg-sage/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
            Serious training meets an unforgettable community experience. Our 12-week program is live, interactive, and genuinely fun, yet built on a rigorous foundation that ensures you walk away with true teaching mastery. Get the skills, the confidence, and the like-minded sangha you've been looking for.
          </p>
          <p className="text-muted-foreground text-sm md:text-base italic">
            Bringing mindfulness off the cushion and onto the pavement
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PositioningStatement;
