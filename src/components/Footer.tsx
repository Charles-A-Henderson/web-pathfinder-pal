import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-foreground text-primary-foreground py-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold">The Path</Link>
            <p className="text-primary-foreground/60 text-sm mt-3 leading-relaxed">
              Meditation training for individuals, teachers, and organizations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Programs</h4>
            <div className="space-y-2">
              <Link to="/teacher-training" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Teacher Training</Link>
              <Link to="/corporate" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Corporate</Link>
              <Link to="/programs" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">All Programs</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">About</Link>
              <Link to="/blog" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Blog</Link>
              <a href="mailto:hello@thepath.com" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Instagram</a>
              <a href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">LinkedIn</a>
              <a href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-primary-foreground/60 mb-8">
          Questions? Please email us at <a href="mailto:sit@thepath.com" className="underline hover:text-primary-foreground">sit@thepath.com</a>
        </p>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} The Path. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
