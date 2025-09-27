import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Style Transfer App",
      description: "Real-time artistic style transfer using deep convolutional neural networks. Implemented with TensorFlow and deployed as a web application with React frontend.",
      image: "/api/placeholder/400/250",
      tags: ["TensorFlow", "React", "Computer Vision", "Deep Learning"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Sentiment Analysis Platform",
      description: "Multi-language sentiment analysis system using transformer models. Processes social media data to provide real-time insights for brand monitoring.",
      image: "/api/placeholder/400/250",
      tags: ["BERT", "NLP", "Python", "FastAPI", "Docker"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system serving 100K+ users. Built with matrix factorization and deep learning hybrid approach.",
      image: "/api/placeholder/400/250",
      tags: ["PyTorch", "Redis", "Apache Spark", "MLOps"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Time Series Forecasting",
      description: "LSTM-based forecasting model for financial market prediction. Achieved 15% improvement over traditional statistical methods.",
      image: "/api/placeholder/400/250",
      tags: ["LSTM", "Time Series", "Quantitative Finance", "Python"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative AI/ML solutions that push the boundaries of what's possible
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-1 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="card-gradient border-border hover:border-ai-primary/50 transition-all duration-300 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      <Eye className="h-16 w-16" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2 group-hover:text-ai-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-ai-primary/10 text-ai-primary border-ai-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-primary-foreground">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:glow-effect">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="card-gradient border-border hover:border-ai-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${(featuredProjects.length * 0.2) + (index * 0.1)}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 flex items-center justify-center">
                  <Eye className="h-12 w-12 opacity-30" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-ai-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-ai-primary/10 text-ai-primary border-ai-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-primary-foreground flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-ai-primary to-ai-secondary flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-primary-foreground">
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
