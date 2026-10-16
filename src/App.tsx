import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Trabalho from "./components/Trabalho";
import Consultorio from "./components/Consultorio";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppFlutuante from "./components/WhatsAppFlutuante";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Trabalho />
        <Consultorio />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
