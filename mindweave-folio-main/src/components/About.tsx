import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research",
      description: "3+ years in deep learning research with published papers in computer vision"
    },
    {
      icon: Code,
      title: "Full-Stack ML",
      description: "End-to-end ML pipeline development from data to deployment"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Experience with large-scale data processing and distributed systems"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Passionate about cutting-edge AI applications and emerging technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming ideas into intelligent solutions through the power of machine learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="animate-slide-in">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate AI/ML developer with a deep fascination for creating intelligent systems 
                  that can understand, learn, and adapt. My journey began with computer science and evolved 
                  into specializing in cutting-edge machine learning technologies.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With expertise spanning from neural network architecture design to production ML systems, 
                  I've worked on diverse projects including computer vision applications, NLP systems, 
                  and recommendation engines that serve millions of users.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not training models or optimizing algorithms, you'll find me contributing to 
                  open-source projects, writing technical blogs, or exploring the latest research papers 
                  in AI.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="card-gradient border-border hover:border-ai-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-lg bg-ai-primary/10 group-hover:bg-ai-primary/20 transition-colors duration-300">
                        <highlight.icon className="h-8 w-8 text-ai-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{highlight.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;