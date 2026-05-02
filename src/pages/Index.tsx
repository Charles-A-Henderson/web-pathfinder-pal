import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import PanareaBanner from "@/components/home/PanareaBanner";
import SocialProofBar from "@/components/home/SocialProofBar";
import WhoItsFor from "@/components/home/WhoItsFor";
import Testimonials from "@/components/home/Testimonials";
import FeaturedQuote from "@/components/home/FeaturedQuote";
import FounderSpotlight from "@/components/home/FounderSpotlight";
import PressLogos from "@/components/home/PressLogos";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Path"
        description="Train your mind. Transform your life. The Path offers meditation teacher training, corporate mindfulness programs, and personal practice — founded by Dina Kaplan."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Path",
          description: "Meditation training for individuals, teachers, and organizations.",
          founder: { "@type": "Person", name: "Dina Kaplan" },
          sameAs: ["https://instagram.com/thepath", "https://linkedin.com/company/thepath"],
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <PanareaBanner />
        <SocialProofBar />
        <WhoItsFor />
        <FeaturedQuote />
        <Testimonials />
        <FounderSpotlight />
        <PressLogos />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
