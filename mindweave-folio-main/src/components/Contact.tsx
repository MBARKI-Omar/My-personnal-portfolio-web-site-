import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have an interesting project or opportunity? I'd love to hear from you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="animate-slide-in">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, collaborating on innovative 
                  AI projects, or simply having a conversation about the latest developments 
                  in machine learning. Whether you have a specific project in mind or just 
                  want to connect, feel free to reach out.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="card-gradient border-border hover:border-ai-primary/50 transition-all duration-300 group">
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 rounded-lg bg-ai-primary/10 group-hover:bg-ai-primary/20 transition-colors duration-300 mr-4">
                      <Mail className="h-6 w-6 text-ai-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">alex.chen@email.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient border-border hover:border-ai-primary/50 transition-all duration-300 group">
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 rounded-lg bg-ai-primary/10 group-hover:bg-ai-primary/20 transition-colors duration-300 mr-4">
                      <MapPin className="h-6 w-6 text-ai-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient border-border hover:border-ai-primary/50 transition-all duration-300 group">
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 rounded-lg bg-ai-primary/10 group-hover:bg-ai-primary/20 transition-colors duration-300 mr-4">
                      <MessageSquare className="h-6 w-6 text-ai-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Response Time</h4>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-background/50 border-border focus:border-ai-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border focus:border-ai-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project collaboration, job opportunity, etc."
                      className="bg-background/50 border-border focus:border-ai-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how we can work together..."
                      rows={6}
                      className="bg-background/50 border-border focus:border-ai-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-ai-primary to-ai-secondary hover:glow-effect transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;