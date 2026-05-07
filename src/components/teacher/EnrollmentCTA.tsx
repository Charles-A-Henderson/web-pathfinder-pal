import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ApplicationFormDialog from "./ApplicationFormDialog";

const includes = [
  "12 weeks of live instruction",
  "Comprehensive course materials",
  "Practicum with real students",
  "Lifetime alumni community access",
  "Certification credential",
  "Business launch toolkit",
];

interface EnrollmentCTAProps {
  autoOpenForm?: boolean;
}

const EnrollmentCTA = ({ autoOpenForm = false }: EnrollmentCTAProps) => {
  const [formOpen, setFormOpen] = useState(autoOpenForm);

  return (
    <section id="enroll" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Teaching Journey?
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-8">
            Enrollment is open for our next cohort. Spots are limited to ensure a personalized experience.
          </p>

          <div className="bg-primary-foreground/10 rounded-2xl p-8 md:p-10 mb-8 backdrop-blur-sm border border-primary-foreground/10">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/60 mb-2">Full Program</p>
            <p className="font-serif text-5xl font-bold mb-1">$3,000</p>
            <p className="text-primary-foreground/60 text-sm mb-8">Payment plans available · Scholarships up to 50% off</p>

            <div className="grid sm:grid-cols-2 gap-3 text-left max-w-md mx-auto mb-8">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm text-primary-foreground/85">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="rounded-full px-10 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base"
                onClick={() => setFormOpen(true)}
              >
                Apply Now
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-primary-foreground/60 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold">
                <a href="mailto:sit@thepath.com?subject=Schedule%20a%20Call">Schedule a Call</a>
              </Button>
            </div>
          </div>

          <p className="text-primary-foreground/50 text-sm">
            Have questions? Email us at{" "}
            <a href="mailto:training@thepath.com" className="underline hover:text-primary-foreground/80 transition-colors">
              training@thepath.com
            </a>
          </p>
        </motion.div>
      </div>

      <ApplicationFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default EnrollmentCTA;
