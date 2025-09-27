import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "MLflow", "Weights & Biases"]
    },
    {
      title: "Deep Learning",
      skills: ["CNNs", "RNNs", "Transformers", "GANs", "BERT", "Vision Transformers"]
    },
    {
      title: "Programming",
      skills: ["Python", "R", "SQL", "JavaScript", "C++", "Julia"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Git", "Jupyter"]
    },
    {
      title: "Data & Analytics",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Apache Spark", "Tableau"]
    },
    {
      title: "Specializations",
      skills: ["Computer Vision", "NLP", "Time Series", "Recommendation Systems", "MLOps", "AutoML"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="card-gradient border border-border rounded-lg p-6 h-full hover:border-ai-primary/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-ai-primary">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-ai-primary/10 text-ai-primary border-ai-primary/20 hover:bg-ai-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Technologies Mastered" },
              { number: "2", label: "Research Papers" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;