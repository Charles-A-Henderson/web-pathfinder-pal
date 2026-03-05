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
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
        >
          {pressLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="h-8 md:h-12 w-auto opacity-50 hover:opacity-80 transition-opacity"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PressLogos;
