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
                  <h4 className="font-semibold text-academic-dark">PhD in Artificial Intelligence</h4>
                  <p className="text-academic-blue font-medium">University of Georgia, Athens</p>
                  <p className="text-sm text-academic-slate">August 2024 - June 2027</p>
                  <p className="text-sm mt-2">GPA: 3.97/4.0</p>
                  <p className="text-sm">Advisor: Dr. Ramviyas Parasuraman</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6 pb-6">
                  <h4 className="font-semibold text-academic-dark">BTech in Data Science and Artificial Intelligence</h4>
                  <p className="text-academic-blue font-medium">IIIT Naya Raipur</p>
                  <p className="text-sm text-academic-slate">November 2020 - June 2024</p>
                  <p className="text-sm mt-2">GPA: 8.96/10</p>
                  <p className="text-sm">Dean's List of Academic Excellence Award 2021, 2023</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6">
                  <h4 className="font-semibold text-academic-dark">Secondary Education</h4>
                  <p className="text-academic-blue font-medium">FIITJEE, Board Of Secondary Education AP</p>
                  <p className="text-sm text-academic-slate">June 2018 - March 2020</p>
                  <p className="text-sm mt-2">GPA: 9.94/10</p>
                  <p className="text-sm">99.5 percentile in JEE with 10+ Lakh test takers</p>
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
                  <h4 className="font-semibold text-academic-dark">Graduate Research Assistant</h4>
                  <p className="text-academic-blue font-medium">HeRoLab Lab, School Of Computing UGA</p>
                  <p className="text-sm text-academic-slate">August 2024 - April 2025</p>
                  <p className="text-sm mt-2">Advisor: Dr. Ramviyas Parasuraman</p>
                  <p className="text-sm">Developed SPACE framework and MGPRL for multi-robot systems</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6 pb-6">
                  <h4 className="font-semibold text-academic-dark">Visiting Research Intern</h4>
                  <p className="text-academic-blue font-medium">Louisville Automation & Robotics Research Institute</p>
                  <p className="text-sm text-academic-slate">January 2023 - June 2024</p>
                  <p className="text-sm mt-2">Advisors: Dr. Sabur Baidya, Dr. Madan Mohan</p>
                  <p className="text-sm">Developed 3DS-SLAM for real-time 3D object detection in Visual SLAM</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6 pb-6">
                  <h4 className="font-semibold text-academic-dark">AI Research Intern</h4>
                  <p className="text-academic-blue font-medium">Samsung R&D Institute, India</p>
                  <p className="text-sm text-academic-slate">July 2022 - January 2023</p>
                  <p className="text-sm mt-2">Designed GANs for synthetic data generation for OCR in Bixby Vision</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-6">
                  <h4 className="font-semibold text-academic-dark">Undergraduate Research Assistant</h4>
                  <p className="text-academic-blue font-medium">Data Science Lab, IIIT Naya Raipur</p>
                  <p className="text-sm text-academic-slate">January 2021 - August 2021</p>
                  <p className="text-sm mt-2">Advisors: Dr. Santosh Kumar, Dr. Mallikharjuna Rao K</p>
                  <p className="text-sm">Developed LIPAR and ViTDD systems for speech recognition and drowsiness detection</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills & Awards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-200">
            <div>
              <h3 className="text-xl font-semibold text-academic-dark mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "C++", "PyTorch", "TensorFlow", "OpenCV", "ROS", "CUDA", "Azure AI", "PCL"].map((skill) => (
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
                  <Trophy className="text-yellow-500 mr-2 h-4 w-4" />
                  International Travel Grant 2500$, 6000$ - IIITNR TEQIP II (2023, 2024)
                </li>
                <li className="flex items-center">
                  <Award className="text-yellow-500 mr-2 h-4 w-4" />
                  1st Position Ernst and Young GDS Hackpions 3.0 (2021)
                </li>
                <li className="flex items-center">
                  <Medal className="text-yellow-500 mr-2 h-4 w-4" />
                  100% Scholarship honor in 10+2 Programme - FIITJEE (2016)
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
