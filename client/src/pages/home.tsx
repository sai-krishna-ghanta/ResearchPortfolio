import { useState } from "react";
import Header from "@/components/header";
import AboutSection from "@/components/about-section";
import ResumeSection from "@/components/resume-section";
import PublicationsSection from "@/components/publications-section";
import TalksSection from "@/components/talks-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "publications":
        return <PublicationsSection />;
      case "talks":
        return <TalksSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}
