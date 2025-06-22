import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, GraduationCap, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const professionalLinks = [
    { name: "Google Scholar", icon: GraduationCap, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "ORCID", icon: GraduationCap, href: "#" }
  ];

  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-academic-dark mb-8">Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-academic-dark mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-academic-blue h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-academic-dark">Email</p>
                    <a 
                      href="mailto:sarah.chen@stanford.edu" 
                      className="text-academic-blue hover:text-blue-700"
                    >
                      sarah.chen@stanford.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-academic-blue h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-academic-dark">Office</p>
                    <p className="text-academic-slate">
                      Gates Computer Science Building<br />
                      Room 392, Stanford, CA 94305
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-academic-blue h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-academic-dark">Phone</p>
                    <a 
                      href="tel:+1-650-123-4567" 
                      className="text-academic-blue hover:text-blue-700"
                    >
                      +1 (650) 123-4567
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-academic-dark mb-4">Office Hours</h4>
                <div className="text-sm text-academic-slate space-y-1">
                  <p>Tuesday: 2:00 PM - 4:00 PM</p>
                  <p>Thursday: 10:00 AM - 12:00 PM</p>
                  <p className="text-xs mt-2">Or by appointment</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-academic-dark mb-6">Professional Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {professionalLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <link.icon className="text-academic-blue text-xl h-6 w-6" />
                    <span className="font-medium text-academic-dark">{link.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-academic-dark mb-2">Collaboration Opportunities</h4>
                <p className="text-sm text-academic-slate">
                  I'm always interested in collaborating on exciting research projects. If you're working on machine learning, AI safety, or related areas, feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
