import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, Brain, Languages, Eye, Users } from "lucide-react";

export default function AboutSection() {
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
                <p className="leading-relaxed mb-4">
                  My work spans developing novel frameworks for 3D spatial cooperation, multi-robot localization using Gaussian processes, and real-time object detection in SLAM systems. I have published research in top-tier venues and conferences including IEEE IROS submissions and IEEE Transactions on Artificial Intelligence.
                </p>
                <p className="leading-relaxed">
                  Prior to my PhD, I gained valuable research experience at Samsung R&D Institute, Louisville Automation & Robotics Research Institute, and various academic labs, focusing on deep learning applications in computer vision and robotics.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-academic-blue hover:bg-blue-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-academic-blue text-academic-blue hover:bg-blue-50">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Google Scholar
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80" 
                alt="Professional headshot" 
                className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Research Interests */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-academic-dark mb-6">Research Interests</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Multi-Robot Systems</h4>
                  <p className="text-sm text-academic-slate">Cooperative exploration, distributed localization, task planning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Computer Vision</h4>
                  <p className="text-sm text-academic-slate">SLAM, 3D object detection, RGB-D and LiDAR fusion</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Brain className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Robotics & AI</h4>
                  <p className="text-sm text-academic-slate">Autonomous navigation, sensor fusion, Gaussian processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Languages className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Deep Learning</h4>
                  <p className="text-sm text-academic-slate">GANs, vision transformers, neural architecture search</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
