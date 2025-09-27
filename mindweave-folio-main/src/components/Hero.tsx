import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/5 via-transparent to-ai-secondary/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-ai-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-secondary/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1s"
    }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="animate-fade-in mb-8">
            <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-r from-ai-primary to-ai-secondary px-[3px] py-[3px]">
              <img src={profilePhoto} alt="Alex Chen - AI/ML Developer" className="w-full h-full rounded-full object-cover bg-background" />
            </div>
          </div>
          
          {/* Name */}
          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Omar M'BARKI</span>
            </h1>
          </div>
          
          {/* Title */}
          <div className="animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
              AI/ML Developer & Research Engineer
            </h2>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about building intelligent systems that solve real-world problems. 
              Specializing in deep learning, computer vision, and natural language processing.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{
          animationDelay: "0.8s"
        }}>
            <Button size="lg" className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:glow-effect transition-all duration-300 text-lg px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="animate-fade-in flex justify-center space-x-6" style={{
          animationDelay: "1s"
        }}>
            <a href="#" className="text-muted-foreground hover:text-ai-primary transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-ai-primary transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-ai-primary transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ai-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ai-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;