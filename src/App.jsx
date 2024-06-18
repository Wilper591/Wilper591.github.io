import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./views/Index";
import Proyectos from "./views/Proyectos";
import Estudios from "./views/Estudios";
import Contacto from "./views/Contacto";
import Tutorias from "./views/Tutorias";

import { ReviewsProvider } from "./context/ReviewsProvider";

function App() {
  return (
    <BrowserRouter>
      <ReviewsProvider>
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="estudios" element={<Estudios />} />
          <Route path="tutorias" element={<Tutorias />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </ReviewsProvider>
    </BrowserRouter>
  );
}

export default App;
