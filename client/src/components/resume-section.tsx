import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Award, Trophy, Medal } from "lucide-react";

export default function ResumeSection() {
  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-academic-dark">Resume</h2>
            <Button className="bg-academic-blue hover:bg-blue-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-academic-dark mb-6 flex items-center">
                <GraduationCap className="text-academic-blue mr-3 h-5 w-5" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-academic-blue pl-6 pb-6">
                  <h4 className="font-semibold text-academic-dark">PhD in Computer Science</h4>
                  <p className="text-academic-blue font-medium">Stanford University</p>
                  <p className="text-sm text-academic-slate">2020 - Present</p>
                  <p className="text-sm mt-2">Advisor: Prof. Andrew Ng</p>
                  <p className="text-sm">Focus: Machine Learning and AI Safety</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6 pb-6">
                  <h4 className="font-semibold text-academic-dark">MS in Computer Science</h4>
                  <p className="text-academic-blue font-medium">MIT</p>
                  <p className="text-sm text-academic-slate">2018 - 2020</p>
                  <p className="text-sm mt-2">GPA: 4.0/4.0</p>
                  <p className="text-sm">Thesis: Neural Architecture Search for Efficient Models</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6">
                  <h4 className="font-semibold text-academic-dark">BS in Computer Science</h4>
                  <p className="text-academic-blue font-medium">UC Berkeley</p>
                  <p className="text-sm text-academic-slate">2014 - 2018</p>
                  <p className="text-sm mt-2">Magna Cum Laude, Phi Beta Kappa</p>
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold text-academic-dark mb-6 flex items-center">
                <Briefcase className="text-academic-blue mr-3 h-5 w-5" />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-academic-blue pl-6 pb-6">
                  <h4 className="font-semibold text-academic-dark">Research Scientist Intern</h4>
                  <p className="text-academic-blue font-medium">Google DeepMind</p>
                  <p className="text-sm text-academic-slate">Summer 2023</p>
                  <p className="text-sm mt-2">Worked on large language model alignment and safety research</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6 pb-6">
                  <h4 className="font-semibold text-academic-dark">Research Assistant</h4>
                  <p className="text-academic-blue font-medium">Stanford AI Lab</p>
                  <p className="text-sm text-academic-slate">2020 - Present</p>
                  <p className="text-sm mt-2">Leading research on interpretable machine learning methods</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6">
                  <h4 className="font-semibold text-academic-dark">Machine Learning Engineer</h4>
                  <p className="text-academic-blue font-medium">Tesla Autopilot</p>
                  <p className="text-sm text-academic-slate">2018 - 2020</p>
                  <p className="text-sm mt-2">Developed computer vision models for autonomous driving</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills & Awards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-200">
            <div>
              <h3 className="text-xl font-semibold text-academic-dark mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "TensorFlow", "JAX", "CUDA", "Docker", "Git", "Linux"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-academic-blue px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-academic-dark mb-4">Awards & Honors</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Award className="text-yellow-500 mr-2 h-4 w-4" />
                  NSF Graduate Research Fellowship (2021)
                </li>
                <li className="flex items-center">
                  <Trophy className="text-yellow-500 mr-2 h-4 w-4" />
                  Best Paper Award - ICML 2023
                </li>
                <li className="flex items-center">
                  <Medal className="text-yellow-500 mr-2 h-4 w-4" />
                  Outstanding Student Award - MIT (2020)
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
