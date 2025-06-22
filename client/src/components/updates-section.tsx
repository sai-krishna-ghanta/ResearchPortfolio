import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function UpdatesSection() {
  const updates = [
    {
      title: "Started PhD Journey at University of Georgia",
      date: "Aug 2024",
      category: "Academic"
    },
    {
      title: "SPACE Framework Paper Submitted to IROS 2025",
      date: "Nov 2024",
      category: "Publication"
    },
    {
      title: "Completed Research Internship at Louisville Automation",
      date: "Jun 2024",
      category: "Research"
    },
    {
      title: "Appointed as IEEE Technical Reviewer",
      date: "Mar 2024",
      category: "Professional"
    },
    {
      title: "AI Research Intern at Samsung R&D",
      date: "Jul 2022",
      category: "Industry"
    },
    {
      title: "Won EY-GDS Hackpions 3.0 - 1st Position",
      date: "2021",
      category: "Achievement"
    }
  ];

  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-academic-dark mb-8">Updates</h2>
          <p className="text-academic-slate mb-8">
            Stay updated with my latest research progress, academic milestones, and professional achievements.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {updates.map((update, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-academic-slate">
                    {update.date}
                  </span>
                  <span className="bg-academic-blue text-white px-2 py-1 rounded text-xs font-medium">
                    {update.category}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-academic-dark">
                  {update.title}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-academic-slate">
              Want to stay updated? Connect with me on social media or subscribe to my research updates.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}