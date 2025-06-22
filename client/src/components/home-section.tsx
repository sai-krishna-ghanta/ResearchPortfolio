import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, GraduationCap, Brain, Languages, Eye, Users } from "lucide-react";

export default function HomeSection() {
  return (
    <section>
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-academic-dark mb-4">Ghanta Sai Krishna</h2>
              <h3 className="text-xl text-academic-blue mb-6">PhD Student in Artificial Intelligence</h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  I am a PhD student in Artificial Intelligence at the University of Georgia, working under the guidance of Dr. Ramviyas Parasuraman at the HeRoLab. My research focuses on multi-robot systems, computer vision, and autonomous navigation in complex environments.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  I have been actively researching on robotics and AI, focusing on multi-robot systems, SLAM, Autonomous systems.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  I completed my Bachelor of Technology in Data Science and Artificial Intelligence from IIIT Naya Raipur.
                </p>
                <p className="text-lg leading-relaxed">
                  Prior to my PhD, I gained valuable research experience at Samsung R&D Institute, Louisville Automation & Robotics Research Institute, and various academic labs, focusing on deep learning applications in computer vision and robotics.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="outline" className="border-academic-blue text-academic-blue hover:bg-blue-50" asChild>
                  <a href="https://scholar.google.com/citations?user=lrK_Y8AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Google Scholar
                  </a>
                </Button>
                <Button variant="outline" className="border-academic-blue text-academic-blue hover:bg-blue-50" asChild>
                  <a href="https://github.com/sai-krishna-ghanta/" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="border-academic-blue text-academic-blue hover:bg-blue-50" asChild>
                  <a href="https://www.linkedin.com/in/sai-krishna-ghanta-320ab0211/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="@assets/1728262143037_1750635317055.jpeg" 
                alt="Ghanta Sai Krishna - Professional headshot" 
                className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      


      {/* Research Interests */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-academic-dark mb-6">Research Interests</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="text-lg font-semibold text-academic-dark">Multi-Robot Systems</h4>
                  <p className="text-lg text-academic-slate">Cooperative exploration, distributed localization, task planning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="text-lg font-semibold text-academic-dark">Computer Vision</h4>
                  <p className="text-lg text-academic-slate">SLAM, 3D object detection, RGB-D and LiDAR fusion</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Brain className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="text-lg font-semibold text-academic-dark">Robotics & AI</h4>
                  <p className="text-lg text-academic-slate">Autonomous navigation, sensor fusion, Gaussian Processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Languages className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="text-lg font-semibold text-academic-dark">Deep Learning</h4>
                  <p className="text-lg text-academic-slate">DEEP RL, GANs, Vision Transformers</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Updates */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-academic-dark mb-6">Recent Updates</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="font-medium text-academic-dark w-32">Nov 2024</span>
              <div className="flex-1">
                <span className="text-academic-blue">SPACE Framework Paper Submitted to IROS 2025</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-medium text-academic-dark w-32">Aug 2024</span>
              <div className="flex-1">
                <span className="text-academic-blue">Started PhD Journey at University of Georgia</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-medium text-academic-dark w-32">Jun 2024</span>
              <div className="flex-1">
                <span className="text-academic-blue">Completed Research Internship at Louisville Automation</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-medium text-academic-dark w-32">Mar 2024</span>
              <div className="flex-1">
                <span className="text-academic-blue">Appointed as IEEE Technical Reviewer</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}