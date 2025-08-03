import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "AI Mastermind",
      url: "https://ai.mastermind-marketing.com/",
      description: "An advanced AI automation platform designed to help businesses build, deploy, and manage intelligent agents and workflows effortlessly.",
      tech: ["React", "TypeScript", "Node.js", "FastAPI", "AI Automation"],
      type: "AI Automation Platform",
      // Using a tech/workflow themed image as placeholder
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Evervault",
      url: "https://evervault.com/",
      description: "First-class payments stack with PCI compliance, payment optimization, card issuing, and secure data handling for global fintech leaders.",
      tech: ["React", "Next.js", "TypeScript", "Payment APIs", "Security"],
      type: "Fintech Platform",
      // Using a security/tech themed image as placeholder
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Trivago",
      url: "https://www.trivago.com/",
      description: "Hotel comparison platform that searches millions of hotels and compares prices from 100+ booking sites to help users find the best deals.",
      tech: ["React", "TypeScript", "Search APIs", "Data Visualization", "Performance Optimization"],
      type: "Travel Platform",
      // Using a travel themed image as placeholder
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Neverbland",
      url: "https://neverbland.com/",
      description: "Digital agency website building brands, digital products and experiences with focus on UX/UI design, web development, and digital marketing.",
      tech: ["React", "Next.js", "Tailwind CSS", "Animation", "Portfolio Design"],
      type: "Agency Website",
      // Using a design/creative themed image as placeholder
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of modern web applications I've built, demonstrating expertise in React, TypeScript, and scalable frontend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.name} project`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {project.type}
                      </Badge>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;