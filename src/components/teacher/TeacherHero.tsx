import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/teacher-training-hero.jpg";

const TeacherHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Meditation teacher training class" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-accent font-medium uppercase tracking-wider text-sm mb-4">Certification Program</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Become a Certified Meditation Teacher
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-xl font-light leading-relaxed">
            Our live, interactive 12-week program gives you the skills, confidence, and certification to lead meditation for individuals, groups, and organizations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <a href="#enroll">Apply Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/60 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold">
              <a href="mailto:training@thepath.com?subject=Program%20Overview%20Request">Program Overview</a>
            </Button>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-6">Scholarships available · email us to learn about our next cohort: sit@thepath.com</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherHero;
