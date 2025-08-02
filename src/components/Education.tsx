import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Strong academic foundation in computer science and software development
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-medium hover:shadow-large transition-all duration-300">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">
                  Bachelor of Science (BS), Computer Science
                </CardTitle>
                <div className="text-xl font-semibold text-primary mb-3">
                  University of Nevada, Las Vegas
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2020 – 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Las Vegas, NV, United States</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Core Coursework</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Software Engineering</li>
                  <li>• Web Development</li>
                  <li>• Database Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Key Projects</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full-stack web applications</li>
                  <li>• Mobile app development</li>
                  <li>• Machine learning projects</li>
                  <li>• Team-based software projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;