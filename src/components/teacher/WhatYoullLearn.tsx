import { motion } from "framer-motion";
import { Brain, Users, Mic, BookOpen, Heart } from "lucide-react";

const items = [
  { icon: Brain, title: "Meditation Techniques", desc: "Master 8+ meditation styles including mindfulness, loving-kindness, body scan, and visualization." },
  { icon: BookOpen, title: "Teaching Methodology", desc: "Learn how to structure classes, guide students, and adapt to different skill levels." },
  { icon: Users, title: "Group Facilitation", desc: "Build confidence leading groups from intimate sessions to large corporate workshops." },
  { icon: Mic, title: "Voice & Presence", desc: "Develop your unique teaching voice with guided exercises in tone, pacing, and presence." },
  { icon: Heart, title: "Trauma-Informed Practice", desc: "Understand how to create safe, inclusive spaces for all participants." },
  { icon: Heart, title: "Mindfulness in Everyday Life", desc: "Participate in weekly challenges to integrate mindful practices into your daily decision-making, shifting you towards living with more joy and ease." },
];

const WhatYoullLearn = () => {
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What You'll Learn</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive curriculum designed by leading meditation teachers and refined over 10+ years.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-sage" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
