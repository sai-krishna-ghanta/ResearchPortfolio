import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Github, ExternalLink, Trophy, ArrowRight } from "lucide-react";

export default function PublicationsSection() {
  const journals = [
    {
      title: "Deep Learning based Holistic Speaker Independent Visual Speech Recognition",
      authors: "P. Nemani, Ghanta Sai Krishna, N. Ramisetty, B. D. S. Sai and S. Kumar",
      venue: "IEEE Transactions on Artificial Intelligence",
      year: "2022",
      award: "IEEE TAI Publication"
    },
    {
      title: "Data preprocessing techniques: emergence and selection towards machine learning models-a practical review using HPA dataset",
      authors: "Mallikharjuna Rao, K., Ghanta Sai Krishna, and Kundrapu Supriya",
      venue: "Multimedia Tools and Applications",
      year: "2023"
    },
    {
      title: "Speaker Independent Visual Speech Recognition: A Systematic Review and Futuristic Applications",
      authors: "P. Nemani, Ghanta Sai Krishna, K. Supriya and Santosh Kumar",
      venue: "Elsevier Journal of Image and Vision Computing",
      year: "2023"
    }
  ];

  const conferences = [
    {
      title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
      authors: "Ghanta Sai Krishna, and Ramviyas Parasuraman",
      venue: "arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE IROS 2025",
      year: "2024"
    },
    {
      title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
      authors: "Ghanta Sai Krishna, and Ramviyas Parasuraman",
      venue: "submitted to IEEE IROS 2025",
      year: "2024"
    },
    {
      title: "3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments",
      authors: "Ghanta Sai Krishna, Kundrapu Supriya, and Sabur Baidya",
      venue: "arXiv preprint arXiv:2310.06385 (2023), submitted to IEEE IROS 2025",
      year: "2023"
    },
    {
      title: "Adversarial Security and Differential Privacy in mmWave Beam Prediction in 6G networks",
      authors: "Ghanta Sai Krishna, Kundrapu Supriya, and Sabur Baidya",
      venue: "IEEE CSNet 2023",
      year: "2023"
    },
    {
      title: "Epersist: A Two-Wheeled Self Balancing Robot Using PID Controller And Deep Reinforcement Learning",
      authors: "Ghanta Sai Krishna, Dyavat Sumith, and Garika Akshay",
      venue: "2022 22nd International Conference on Control, Automation and Systems (ICCAS), IEEE",
      year: "2022"
    },
    {
      title: "dScout: Unmanned Ground Vehicle for Automatic Disease Detection and Pesticide Atomizer",
      authors: "Ghanta Sai Krishna, et al.",
      venue: "2022 IEEE 7th International conference for Convergence in Technology (I2CT), IEEE",
      year: "2022"
    },
    {
      title: "A Novel end-to-end Framework for Occluded Pixel Reconstruction with Spatio-temporal Features for Improved Person Re-identification",
      authors: "P. R. Medi, P. Nemani, Ghanta Sai Krishna, S.Vollala",
      venue: "IEEE 2023 8th International Conference on Business and Industrial Research",
      year: "2023"
    },
    {
      title: "Thermographic Fault Diagnosis: An eXplainable Compact Vision in Transformer Approach for Electrical Machine",
      authors: "Ghanta Sai Krishna, Anmol Agarwal, Aparna Sinha and Debanjan Da",
      venue: "submitted to IEEE Sensors Journal",
      year: "2024"
    }
  ];

  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-academic-dark mb-8">Publications</h2>
          
          {/* Journals Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-academic-dark mb-6">Journals</h3>
            <div className="space-y-4">
              {journals.map((publication, index) => (
                <div key={index} className="border-l-4 border-academic-blue pl-6 py-4 bg-blue-50/30 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-academic-dark mb-2">
                    {publication.title}
                  </h4>
                  <p className="text-academic-blue font-medium mb-1">
                    {publication.authors}
                  </p>
                  <p className="text-sm text-academic-slate mb-2">
                    <span className="font-medium">{publication.venue}</span> • {publication.year}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="link" size="sm" className="text-academic-blue hover:text-blue-700 p-0">
                      <FileText className="mr-1 h-4 w-4" />
                      Paper
                    </Button>
                    {publication.award && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        <Trophy className="mr-1 h-3 w-3" />
                        {publication.award}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conferences Section */}
          <div>
            <h3 className="text-2xl font-semibold text-academic-dark mb-6">Conferences</h3>
            <div className="space-y-4">
              {conferences.map((publication, index) => (
                <div key={index} className="border-l-4 border-slate-300 pl-6 py-4 bg-slate-50/50 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-academic-dark mb-2">
                    {publication.title}
                  </h4>
                  <p className="text-academic-blue font-medium mb-1">
                    {publication.authors}
                  </p>
                  <p className="text-sm text-academic-slate mb-2">
                    <span className="font-medium">{publication.venue}</span> • {publication.year}
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
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
