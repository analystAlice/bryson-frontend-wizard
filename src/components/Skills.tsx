import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Core Frontend",
    skills: [
      { name: "JavaScript (ES6+)", years: "5 yrs" },
      { name: "TypeScript", years: "5 yrs" },
      { name: "React.js", years: "5 yrs" },
      { name: "Next.js", years: "5 yrs" }
    ],
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    title: "UI/Styling",
    skills: [
      { name: "HTML5, CSS3", years: "5 yrs" },
      { name: "Tailwind CSS", years: "3 yrs" },
      { name: "Material UI, ShadCN/UI", years: "2 yrs" },
      { name: "Responsive & Accessible Design (WCAG)", years: "4 yrs" }
    ],
    gradient: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux Toolkit", years: "3 yrs" },
      { name: "React Query", years: "2 yrs" },
      { name: "Context API", years: "4 yrs" }
    ],
    gradient: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    title: "Tooling & DevOps",
    skills: [
      { name: "Git, GitHub, GitHub Actions", years: "5 yrs" },
      { name: "Webpack, Vite", years: "3 yrs" },
      { name: "npm, pnpm, Yarn", years: "4 yrs" },
      { name: "CI/CD with Vercel & Netlify", years: "2 yrs" }
    ],
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    title: "Testing & Quality",
    skills: [
      { name: "Jest, React Testing Library", years: "2 yrs" },
      { name: "Cypress", years: "1 yr" }
    ],
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600"
  },
  {
    title: "APIs & Data Handling",
    skills: [
      { name: "REST API Integration", years: "4 yrs" },
      { name: "GraphQL", years: "2 yrs" },
      { name: "Axios, Fetch API", years: "4 yrs" }
    ],
    gradient: "bg-gradient-to-br from-emerald-500 to-green-600"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive expertise across the modern frontend development ecosystem
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 group">
            <CardHeader>
              <div className={`w-12 h-12 rounded-lg ${category.gradient} mb-4 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                {category.title.charAt(0)}
              </div>
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.years}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;