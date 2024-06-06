import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./views/Index";
import Proyectos from "./views/Proyectos";
import Estudios from "./views/Estudios";
import Contacto from "./views/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="estudios" element={<Estudios />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
