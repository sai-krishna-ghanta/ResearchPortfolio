import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function UpdatesSection() {
  const updates = [
    {
      title: "Started PhD Journey at University of Georgia",
      date: "August 2024",
      category: "Academic Milestone",
      description: "Officially began my PhD in Artificial Intelligence at the Franklin College of Arts and Sciences, University of Georgia, Athens. Excited to work with Dr. Ramviyas Parasuraman in the HeRoLab on cutting-edge robotics research.",
      readTime: "2 min read"
    },
    {
      title: "Research Paper Accepted at IROS 2025",
      date: "November 2024",
      category: "Publication",
      description: "Thrilled to announce that our paper 'SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems' has been submitted to IEEE IROS 2025. This work represents a significant advancement in multi-robot coordination.",
      readTime: "3 min read"
    },
    {
      title: "Completed Summer Research at Louisville Automation",
      date: "June 2024",
      category: "Research Experience",
      description: "Wrapped up an incredible research internship where I developed 3DS-SLAM, a real-time 3D Object Detection system for Visual SLAM with RGB-D and LiDAR sensors. The experience provided invaluable insights into sensor fusion techniques.",
      readTime: "4 min read"
    },
    {
      title: "IEEE Technical Reviewer Appointment",
      date: "March 2024",
      category: "Professional Development",
      description: "Honored to serve as a technical reviewer for IEEE AiDaS 2023 and IROS 2025 conferences. This role allows me to contribute to the peer review process and stay at the forefront of robotics and AI research.",
      readTime: "2 min read"
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {updates.map((update, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-5 hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-academic-blue text-white px-2 py-1 rounded text-xs font-medium">
                    {update.category}
                  </span>
                  <span className="flex items-center text-sm text-academic-slate">
                    <Calendar className="mr-1 h-3 w-3" />
                    {update.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-academic-dark mb-2">
                  {update.title}
                </h3>
                <p className="text-sm leading-relaxed text-academic-slate">
                  {update.description}
                </p>
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