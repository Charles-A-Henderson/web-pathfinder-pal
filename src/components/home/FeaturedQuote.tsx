import { motion } from "framer-motion";

const FeaturedQuote = () => {
  return (
    <section className="py-20 bg-sage/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <blockquote>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic">
              "Everyone was blown away [by the offsite Dina led]. 'Best offsite ever' is what I heard. Everyone is raving about [Dina's] brilliance and talent."
            </p>
            <footer className="mt-6">
              <cite className="text-muted-foreground text-sm md:text-base not-italic font-medium">
                — Sarah Bond, President of Xbox / Microsoft
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedQuote;
