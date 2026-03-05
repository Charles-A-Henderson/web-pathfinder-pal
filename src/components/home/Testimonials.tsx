import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { quote: "Everyone was blown away [by the offsite Dina led]. 'Best offsite ever' is what I heard. Everyone is raving about [Dina's] brilliance and talent.", name: "Sarah Bond", title: "MTT Student" },
  { quote: "I literally got three thank you messages as soon as it was over. It was fantastic, thanks again and can't wait for the next one.", name: "Micah Rosenbloom", title: "MTT Student" },
  { quote: "Dina is a wonderful meditation teacher. She has infectious, positive energy. Her workshops and classes are fun and always informative.", name: "Mickey Lemle", title: "MTT Student" },
  { quote: "Dina's demeanor was remarkable – she exuded warmth, humor, and genuine compassion. Meditation felt accessible and non-intimidating to everyone present.", name: "Amy Compero", title: "MTT Student" },
  { quote: "Dina was warm and approachable while clearly an expert in her field. The actual meditation she led us through was extremely powerful.", name: "Nikki Scott", title: "MTT Student" },
  { quote: "Dina has a unique ability to make each person feel like she is speaking directly to them.", name: "Josh Tenenbaum", title: "MTT Student" },
  { quote: "Everyone loved Dina... even the tough ones! Such a privilege for us to be with her for four days.", name: "Molly Kenny", title: "MTT Student" },
  { quote: "Dina led an incredible meditation session for our team at a time when people have been feeling stressed and overwhelmed. We definitely want to bring her back.", name: "Udeme Asuquo", title: "MTT Student" },
  { quote: "I want to say with the outmost openness of my heart that The Path has truly changed me for the better.", name: "Dominic Wimbley", title: "MTT Student" },
  { quote: "Dina Kaplan's Meditation Teacher Training with The Path is an absolute 10/10. This program has been a true game changer for my life.", name: "Ryan Cunningham", title: "MTT Student" },
  { quote: "Dina Kaplan truly lives what she teaches. She has created a meditation school and community that radiates authenticity.", name: "Rebecca Dahmen", title: "MTT Student" },
  { quote: "In 30 years of post college trainings, I do not recall a more intelligent and well designed training.", name: "Ethan Berg", title: "MTT Student" },
  { quote: "MTT training at The Path was a truly transformative experience. I built meaningful connections, explored mindfulness and meditation in a deeply supportive group environment.", name: "Marissa Baca", title: "MTT Student" },
  { quote: "I'm in the middle of the course now, and Sundays have become my favorite day! The classes are clear, supportive, and thoughtfully designed to actually build real guiding skills.", name: "Yuka Saijo", title: "MTT Student" },
  { quote: "I just went to Dina Kaplan and The Path's mini retreat in Los Angeles, and I was blown away. Dina is really an exceptional meditation guide.", name: "Stephen Hodges", title: "MTT Student" },
  { quote: "The Path is not only a place to have an incredibly meditative learning experience, it's a place to meet kindred spirits and make important life connections.", name: "David L", title: "MTT Student" },
  { quote: "I have been to many Buddhist retreats with The Path and have literally met some of my closest friends through them. Dina is a master community builder.", name: "Noi N", title: "MTT Student" },
  { quote: "Dina makes this ancient wisdom accessible and applicable to modern life, and she creates such a warm atmosphere.", name: "Sandy Cohen", title: "MTT Student" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-warm">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8"
            >
              <Quote className="h-10 w-10 text-accent mx-auto mb-6 opacity-60" />
              <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </blockquote>
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <span className="text-sm text-muted-foreground tabular-nums">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
