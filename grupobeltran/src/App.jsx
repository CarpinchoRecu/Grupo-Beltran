import style from "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Inicio from "./components/Inicio/Inicio.jsx";
import Coberturas from "./components/Coberturas/Coberturas.jsx";
import Trabajo from "./components/Trabajo/Trabajo.jsx";
import Contactanos from "./components/contactanos/Contactanos";
import Nosotros from "./components/Nosotros/Nosotros";
import Error404 from "./components/Error404/Error404.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FormTrabajo from "./components/Trabajo/FormTrabajo.jsx";
import ChatBot from "./components/ChatBot/ChatBot.jsx";
import Femechaco from "./components/Coberturas/Opciones/Femechaco/Femechaco.jsx";
import Ospida from "./components/Coberturas/Opciones/Ospida/Ospida.jsx";
import SancorSalud from "./components/Coberturas/Opciones/Sancor/SancorSalud.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* routeo de error */}
        <Route path="*" element={<Inicio />} />

        {/* routeo de paginas principales */}
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Coberturas" element={<Coberturas />} />
        <Route path="/Trabajo" element={<Trabajo />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Nosotros" element={<Error404 />} />

        {/* routeo de formulario trabajo */}
        <Route path="/FormTrabajo" element={<FormTrabajo />} />

        {/* routeo de coberturas */}
        <Route path="/Femechaco" element={<Femechaco/>} />
        <Route path="/Ospida" element={<Ospida/>} />
        <Route path="/SancorSalud" element={<SancorSalud/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
