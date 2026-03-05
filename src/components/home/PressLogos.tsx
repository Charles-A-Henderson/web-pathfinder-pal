import { motion } from "framer-motion";

import nytLogo from "@/assets/press/nyt.svg";
import forbesLogo from "@/assets/press/forbes.svg";
import wsjLogo from "@/assets/press/wsj.svg";
import incLogo from "@/assets/press/inc.svg";
import fastCoLogo from "@/assets/press/fastcompany.svg";
import entrepreneurLogo from "@/assets/press/entrepreneur.svg";

const pressLogos = [
  { name: "The New York Times", src: nytLogo },
  { name: "Forbes", src: forbesLogo },
  { name: "The Wall Street Journal", src: wsjLogo },
  { name: "Inc.", src: incLogo },
  { name: "Fast Company", src: fastCoLogo },
  { name: "Entrepreneur", src: entrepreneurLogo },
];

const PressLogos = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-10">
          As Featured In
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {pressLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-14 md:h-16 items-center justify-center rounded-lg border border-border/50 bg-background/50 px-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className="max-h-7 md:max-h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PressLogos;
