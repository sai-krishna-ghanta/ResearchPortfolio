import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function UpdatesSection() {
  const updates = [
    {
      title: "SPACE Framework Paper Submitted to IROS 2025",
      date: "November 2024"
    },
    {
      title: "MGPRL Paper Submitted to IROS 2025", 
      date: "November 2024"
    },
    {
      title: "Started PhD Journey at University of Georgia",
      date: "August 2024"
    },
    {
      title: "Completed Research Internship at Louisville Automation",
      date: "June 2024"
    },
    {
      title: "Appointed as IEEE Technical Reviewer for IROS 2025",
      date: "March 2024"
    },
    {
      title: "AI Research Intern at Samsung R&D Institute",
      date: "July 2022"
    },
    {
      title: "Won EY-GDS Hackpions 3.0 - 1st Position",
      date: "2021"
    },
    {
      title: "Dean's List of Academic Excellence Award",
      date: "2021"
    }
  ];

  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-academic-dark mb-8">Updates Archive</h2>
          
          <div className="space-y-4">
            {updates.map((update, index) => (
              <div key={index} className="flex justify-between items-start border-b border-slate-200 pb-3">
                <span className="font-medium text-academic-dark w-40 flex-shrink-0">
                  {update.date}
                </span>
                <div className="flex-1">
                  <span className="text-academic-blue hover:text-blue-700 cursor-pointer">
                    {update.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}