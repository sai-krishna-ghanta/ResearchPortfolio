import { Github, Linkedin, Twitter, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-academic-slate">
            © 2024 Ghanta Sai Krishna. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-academic-slate hover:text-academic-blue transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-academic-slate hover:text-academic-blue transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-academic-slate hover:text-academic-blue transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-academic-slate hover:text-academic-blue transition-colors">
              <GraduationCap className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
