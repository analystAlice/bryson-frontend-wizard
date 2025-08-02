import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
};

export default Index;
