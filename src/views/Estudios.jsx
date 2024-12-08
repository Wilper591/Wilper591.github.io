import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StudyCard from "../components/StudyCard";
import { certificates } from "../data/certificatesData";

const Estudios = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="font-bold text-4xl text-center mb-10 text-gray-100">
          Formación en Desarrollo Web
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <StudyCard key={index} certificate={certificate} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Estudios;
