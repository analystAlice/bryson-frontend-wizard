import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "DesertIT Solutions",
    location: "Las Vegas, NV, United States",
    period: "01/2024 – 07/2025",
    current: true,
    achievements: [
      "Led frontend development of multiple React and Next.js applications, optimizing performance through code-splitting and lazy loading (reduced load times by 35%).",
      "Designed scalable UI components with Tailwind CSS and TypeScript, improving developer velocity and reducing bugs.",
      "Mentored junior developers via code reviews and pair programming.",
      "Spearheaded migration of legacy JavaScript apps to TypeScript + Next.js, improving maintainability and reliability.",
      "Built CI/CD pipelines on GitHub Actions & Vercel, ensuring smooth deployments."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Synoptek",
    location: "Las Vegas, NV, United States",
    period: "02/2022 – 12/2022",
    current: false,
    achievements: [
      "Designed and delivered responsive e‑commerce frontends with React, Next.js, and Tailwind CSS.",
      "Integrated payment gateways (Stripe, PayPal) and optimized checkout flows, increasing conversion rates for clients.",
      "Developed dashboards for SaaS platforms with dynamic data visualization using Chart.js and React Query.",
      "Improved app performance with code splitting and lazy loading, cutting page load times by 30%.",
      "Collaborated directly with stakeholders to translate business requirements into scalable frontend solutions."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Independent Projects / Early Career",
    location: "Las Vegas, NV, United States",
    period: "09/2020 – 12/2021",
    current: false,
    achievements: [
      "Built small web apps with HTML, CSS, and vanilla JavaScript, gaining experience in responsive UI design.",
      "Developed first React components, applying modern hooks and functional programming concepts.",
      "Converted design mockups into pixel‑perfect web pages, ensuring cross‑browser compatibility.",
      "Contributed to open‑source repositories by fixing bugs and enhancing UI features.",
      "Established strong foundation in Git, GitHub collaboration, and modern frontend workflows."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A track record of delivering high-quality frontend solutions and leading development teams
        </p>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    {exp.title}
                    {exp.current && (
                      <Badge className="bg-gradient-primary text-white">Current</Badge>
                    )}
                  </CardTitle>
                  <div className="text-xl font-semibold text-primary mb-2">
                    {exp.company}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;