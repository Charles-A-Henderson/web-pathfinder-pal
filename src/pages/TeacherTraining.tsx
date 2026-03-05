import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeacherHero from "@/components/teacher/TeacherHero";
import WhatYoullLearn from "@/components/teacher/WhatYoullLearn";
import CurriculumTimeline from "@/components/teacher/CurriculumTimeline";
import StudentStories from "@/components/teacher/StudentStories";
import TeacherFAQ from "@/components/teacher/TeacherFAQ";
import EnrollmentCTA from "@/components/teacher/EnrollmentCTA";
import SEO from "@/components/SEO";

const TeacherTraining = () => {
  const [searchParams] = useSearchParams();
  const autoOpenForm = searchParams.get("apply") === "true";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Meditation Teacher Training"
        description="Become a certified meditation teacher with The Path's 12-week training program. Learn methodology, neuroscience, and trauma-informed practice. $5,500 with scholarship options."
        ogType="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Meditation Teacher Training Certification",
          provider: { "@type": "Organization", name: "The Path" },
          description: "12-week meditation teacher certification program blending ancient practices with modern neuroscience.",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "blended",
            duration: "P12W",
          },
          offers: {
            "@type": "Offer",
            price: "5500",
            priceCurrency: "USD",
          },
        }}
      />
      <Navbar />
      <main>
        <TeacherHero />
        <WhatYoullLearn />
        <CurriculumTimeline />
        <StudentStories />
        <TeacherFAQ />
        <EnrollmentCTA autoOpenForm={autoOpenForm} />
      </main>
      <Footer />
    </div>
  );
};

export default TeacherTraining;
