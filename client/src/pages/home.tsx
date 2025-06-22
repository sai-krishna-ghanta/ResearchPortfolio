import { useState } from "react";
import Header from "@/components/header";
import HomeSection from "@/components/home-section";
import ResearchSection from "@/components/research-section";
import PublicationsSection from "@/components/publications-section";
import UpdatesSection from "@/components/updates-section";
import ResumeSection from "@/components/resume-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection />;
      case "research":
        return <ResearchSection />;
      case "publications":
        return <PublicationsSection />;
      case "updates":
        return <UpdatesSection />;
      case "resume":
        return <ResumeSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
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
