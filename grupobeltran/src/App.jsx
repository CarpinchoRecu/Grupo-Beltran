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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ChatBot/>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Coberturas" element={<Error404 />} />
        <Route path="/Trabajo" element={<Trabajo />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Nosotros" element={<Error404 />} />
        <Route path="*" element={<Inicio />} />
        <Route path="/FormTrabajo" element={<FormTrabajo />} />

      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
