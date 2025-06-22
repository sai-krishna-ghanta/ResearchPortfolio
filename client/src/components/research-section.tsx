import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Github, ExternalLink, Trophy, ArrowRight } from "lucide-react";

export default function ResearchSection() {
  const featuredResearch = [
    {
      title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
      authors: "Ghanta Sai Krishna, and Ramviyas Parasuraman",
      venue: "arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE IROS 2025",
      year: "2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Developed an online 3D spatial exploration framework for multi-robot systems utilizing situational awareness and dynamic filter to mitigate ghosting trail effect in 3D reconstructions."
    },
    {
      title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
      authors: "Ghanta Sai Krishna, and Ramviyas Parasuraman",
      venue: "submitted to IEEE IROS 2025",
      year: "2024",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Introduced a distributed multi-robot relative localization approach leveraging uncertainty-aware Gaussian Processes and Wi-Fi RSSI signals for robust, efficient pose estimation in GPS-denied environments."
    },
    {
      title: "3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments",
      authors: "Ghanta Sai Krishna, Kundrapu Supriya, and Sabur Baidya",
      venue: "arXiv preprint arXiv:2310.06385 (2023), submitted to IEEE IROS 2025",
      year: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Developed real-time 3D Object Detection in Visual SLAM with RGB-D and LiDAR sensors for dynamic indoor environments."
    }
  ];

  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-academic-dark mb-8">Recent Research</h2>
          <p className="text-academic-slate mb-8">
            My research focuses on advancing multi-robot systems, computer vision, and AI frameworks for autonomous navigation and cooperative exploration.
          </p>
          
          <div className="space-y-8">
            {featuredResearch.map((research, index) => (
              <article key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <img 
                      src={research.image}
                      alt={`Visualization for ${research.title}`}
                      className="rounded-lg w-full h-48 object-cover border border-slate-200"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-academic-dark mb-2">
                      {research.title}
                    </h3>
                    <p className="text-academic-blue font-medium mb-2">
                      {research.authors}
                    </p>
                    <p className="text-sm text-academic-slate mb-3">
                      <span className="font-medium">{research.venue}</span> • {research.year}
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                      {research.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="link" size="sm" className="text-academic-blue hover:text-blue-700 p-0">
                        <FileText className="mr-1 h-4 w-4" />
                        Paper
                      </Button>
                      <Button variant="link" size="sm" className="text-academic-blue hover:text-blue-700 p-0">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Button>
                      <Button variant="link" size="sm" className="text-academic-blue hover:text-blue-700 p-0">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        arXiv
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="link" className="text-academic-blue hover:text-blue-700">
              <span>View all research</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}