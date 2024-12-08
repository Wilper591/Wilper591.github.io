import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsData";

const Proyectos = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-100">
          Proyectos
        </h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proyectos;
