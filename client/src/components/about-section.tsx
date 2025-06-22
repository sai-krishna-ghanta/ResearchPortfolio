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
              <h2 className="text-3xl font-bold text-academic-dark mb-4">Dr. Sarah Chen</h2>
              <h3 className="text-xl text-academic-blue mb-6">PhD Candidate in Computer Science</h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  I am a PhD candidate in Computer Science at Stanford University, specializing in machine learning and artificial intelligence. My research focuses on developing novel algorithms for natural language processing and computer vision applications.
                </p>
                <p className="leading-relaxed mb-4">
                  My work has been published in top-tier venues including NeurIPS, ICML, and ICLR. I am particularly interested in the intersection of deep learning and human-computer interaction, exploring how AI systems can be made more interpretable and trustworthy.
                </p>
                <p className="leading-relaxed">
                  Before pursuing my PhD, I worked as a research scientist at Google AI, where I contributed to several open-source projects and collaborated with teams across different research areas.
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
                <Brain className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Machine Learning</h4>
                  <p className="text-sm text-academic-slate">Deep learning, neural networks, optimization algorithms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Languages className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Natural Language Processing</h4>
                  <p className="text-sm text-academic-slate">Transformer models, language understanding, generation</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Eye className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Computer Vision</h4>
                  <p className="text-sm text-academic-slate">Image recognition, object detection, multimodal learning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-academic-blue mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-academic-dark">Human-Computer Interaction</h4>
                  <p className="text-sm text-academic-slate">AI interpretability, user experience, trust in AI systems</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
