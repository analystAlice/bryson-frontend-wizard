import { Card, CardContent } from "@/components/ui/card";
import { Code2, Users, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "5+ Years Experience",
    description: "Architecting scalable web applications"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentoring developers & cross-functional collaboration"
  },
  {
    icon: Target,
    title: "Performance Focus",
    description: "35% load time improvements through optimization"
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "Passionate about cutting-edge frontend technologies"
  }
];

const Profile = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Profile
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground">
                Senior Frontend Developer with <span className="font-semibold text-primary">5+ years of experience</span> architecting 
                scalable, user-friendly web applications. Specialized in <span className="font-semibold text-primary">React, Next.js, TypeScript, and Tailwind CSS</span>, 
                with a proven track record of leading projects from design handoff to production deployment.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-foreground">
                Adept at <span className="font-semibold text-primary">mentoring junior developers</span>, optimizing performance, 
                and collaborating cross-functionally to deliver clean, maintainable code. Passionate about building 
                <span className="font-semibold text-primary"> intuitive, accessible, and high-performance UIs</span> that provide 
                exceptional user experiences.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;