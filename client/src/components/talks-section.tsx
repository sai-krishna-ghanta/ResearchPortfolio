import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, FileText, Video, Code, ExternalLink } from "lucide-react";

export default function TalksSection() {
  const talks = [
    {
      title: "The Future of Interpretable AI: Bridging Human Understanding and Machine Learning",
      date: "November 15, 2023",
      venue: "Stanford AI Symposium, Stanford University",
      type: "Keynote Talk",
      description: "Delivered a keynote presentation on the importance of interpretability in modern AI systems, discussing recent advances in explainable AI and their implications for real-world applications.",
      links: [
        { type: "slides", label: "Slides", icon: FileText },
        { type: "video", label: "Video", icon: Video }
      ]
    },
    {
      title: "Neural Architecture Search: From Theory to Practice",
      date: "October 8, 2023",
      venue: "Google AI Research Seminar, Mountain View",
      type: "Research Seminar",
      description: "Presented recent work on attention-based neural architecture search methods and their applications to large language models. Discussed both theoretical foundations and practical implementation challenges.",
      links: [
        { type: "slides", label: "Slides", icon: FileText },
        { type: "demo", label: "Code Demo", icon: Code }
      ]
    },
    {
      title: "Multi-Modal Learning for Medical Applications",
      date: "July 22, 2023",
      venue: "ICML 2023, Honolulu, Hawaii",
      type: "Conference Presentation",
      description: "Presented our work on interpretable multi-modal learning for medical image analysis at the International Conference on Machine Learning. Demonstrated the effectiveness of our approach on real medical datasets.",
      links: [
        { type: "slides", label: "Slides", icon: FileText },
        { type: "poster", label: "Poster", icon: FileText },
        { type: "recording", label: "Recording", icon: Video }
      ]
    },
    {
      title: "Privacy-Preserving Machine Learning: Challenges and Opportunities",
      date: "April 15, 2023",
      venue: "MIT Privacy Workshop, Cambridge, MA",
      type: "Invited Talk",
      description: "Invited talk on federated learning and differential privacy techniques for healthcare applications. Discussed the balance between model performance and privacy guarantees.",
      links: [
        { type: "slides", label: "Slides", icon: FileText },
        { type: "abstract", label: "Abstract", icon: ExternalLink }
      ]
    }
  ];

  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-academic-dark mb-8">Talks & Presentations</h2>
          
          <div className="space-y-6">
            {talks.map((talk, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-academic-dark mb-2">
                      {talk.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-academic-slate mb-3">
                      <span className="flex items-center">
                        <Calendar className="mr-2 text-academic-blue h-4 w-4" />
                        {talk.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-2 text-academic-blue h-4 w-4" />
                        {talk.venue}
                      </span>
                      <span className="flex items-center">
                        <Users className="mr-2 text-academic-blue h-4 w-4" />
                        {talk.type}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4">
                      {talk.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 lg:ml-6">
                    {talk.links.map((link, linkIndex) => (
                      <Button 
                        key={linkIndex}
                        variant="link" 
                        size="sm" 
                        className="text-academic-blue hover:text-blue-700 p-0"
                      >
                        <link.icon className="mr-1 h-4 w-4" />
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
