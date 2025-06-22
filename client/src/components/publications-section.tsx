import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Github, ExternalLink, Trophy, ArrowRight } from "lucide-react";

export default function PublicationsSection() {
  const publications = [
    {
      title: "Attention-Based Neural Architecture Search for Efficient Language Models",
      authors: "Sarah Chen, Michael Zhang, Jennifer Liu",
      venue: "Neural Information Processing Systems (NeurIPS)",
      year: "2023",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "We propose a novel attention-based neural architecture search method that automatically discovers efficient architectures for large language models. Our approach reduces computational cost by 40% while maintaining comparable performance on downstream tasks.",
      award: "Best Paper Award"
    },
    {
      title: "Interpretable Multi-Modal Learning for Medical Image Analysis",
      authors: "Sarah Chen, David Kim, Prof. Andrew Ng",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2023",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "A novel approach to multi-modal learning that combines visual and textual medical data while providing interpretable explanations for diagnostic decisions. Validated on large-scale medical datasets."
    },
    {
      title: "Federated Learning with Differential Privacy for Healthcare Applications",
      authors: "Sarah Chen, Maria Rodriguez, Prof. Fei-Fei Li",
      venue: "International Conference on Learning Representations (ICLR)",
      year: "2022",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "We present a federated learning framework that preserves patient privacy through differential privacy mechanisms while enabling collaborative training across multiple healthcare institutions."
    }
  ];

  return (
    <section>
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-academic-dark mb-8">Publications</h2>
          
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <article key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <img 
                      src={publication.image}
                      alt={`Visualization for ${publication.title}`}
                      className="rounded-lg w-full h-48 object-cover border border-slate-200"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-academic-dark mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-academic-blue font-medium mb-2">
                      {publication.authors}
                    </p>
                    <p className="text-sm text-academic-slate mb-3">
                      <span className="font-medium">{publication.venue}</span> • {publication.year}
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                      {publication.description}
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
                      {publication.award && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <Trophy className="mr-1 h-3 w-3" />
                          {publication.award}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="link" className="text-academic-blue hover:text-blue-700">
              <span>View all publications</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
