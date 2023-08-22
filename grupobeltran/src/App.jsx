import style from "./style.scss";
import { BrowserRouter, Routes, Route, useLocation  } from "react-router-dom";
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
import Visitar from "./components/Coberturas/Opciones/Visitar/Visitar.jsx";
import Assistencial from "./components/Coberturas/Opciones/Assistencial/Assistencial.jsx";
import Monotributo from "./components/Coberturas/Monotributo.jsx";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop/>
      <ChatBot/>
      <Routes>
        {/* routeo de error */}
        <Route path="*" element={<Inicio />} />

        {/* routeo de paginas principales */}
        <Route path="/Inicio" element={<Inicio />} key="Inicio" />
        <Route path="/Coberturas" element={<Coberturas />} key="Coberturas" />
        <Route path="/Monotributo" element={<Monotributo />} key="Monotributo" />
        <Route path="/Trabajo" element={<Trabajo />} key="Trabajo" />
        <Route path="/Contactanos" element={<Contactanos />} key="Contactanos" />
        <Route path="/Nosotros" element={<Nosotros />} key="Nosotros" />

        {/* routeo de formulario trabajo */}
        <Route path="/Trabajo/FormularioTrabajo" element={<FormTrabajo />} key="FormularioTrabajo" />

        {/* routeo de coberturas */}
        <Route path="/Coberturas/Femechaco" element={<Femechaco />} key="Femechaco" />
        <Route path="/Coberturas/Ospida" element={<Ospida />} key="Ospida" />
        <Route path="/Coberturas/SancorSalud" element={<SancorSalud />} key="SancorSalud" />
        <Route path="/Coberturas/Visitar" element={<Visitar />} key="Visitar" />
        <Route path="/Coberturas/Assistencial" element={<Assistencial />} key="Assistencial" />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
