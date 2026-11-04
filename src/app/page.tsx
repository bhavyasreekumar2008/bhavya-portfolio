import HeroCover from "@/components/HeroCover";
import ContentsSection from "@/components/ContentsSection";
import AboutSection from "@/components/AboutSection";
import ProjectSpread from "@/components/ProjectSpread";
import SkillsSection from "@/components/SkillsSection";
import EducationTimeline from "@/components/EducationTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 01. Cover / Hero Spread (Vertical Split with 90° Rotated Spine Text) */}
      <HeroCover />

      {/* 02. Table of Contents Spread */}
      <ContentsSection />

      {/* 03. About Me Spread (Copying Reference "About Me" layout) */}
      <AboutSection />

      {/* 04. Selected Works / Project Spreads (3 Curated Spreads, Alternating Layouts) */}
      <section id="projects" className="w-full flex flex-col items-center">
        {portfolioData.projects.map((project, idx) => (
          <ProjectSpread
            key={project.id}
            project={project}
            index={idx}
            total={portfolioData.projects.length}
          />
        ))}
      </section>

      {/* 05. Skills Typographic Matrix (Minimalist Rows, No Colorful Meters) */}
      <SkillsSection />

      {/* 06. Education Chronology Timeline */}
      <EducationTimeline />

      {/* 07. Inquiry & Dispatch (Underlined Minimalist Form & Direct Channels) */}
      <ContactSection />

      {/* 08. Colophon & Footer (Monolith Wordmark + Back to Top) */}
      <Footer />
    </div>
  );
}
