import Formacao from "../Components/Formacao/Formacao";
import Menu from "../Components/Header/Menu";
import Sobre from "../Components/Sobre/Sobre";
import OutrosConhecimentos from "../Components/OutrosConhecimentos/OutrosConhecimentos";
import Projetos from "../Components/Projetos/Projetos";
import Footer from "../Components/Footer/Footer";
import Carrossel from "../Components/Carrossel/Carrossel";

function Home() {
  return (
    <div>
      <Menu />
      <Sobre />
      <Projetos />
      <OutrosConhecimentos />
      <Formacao />
      <Carrossel />
      <Footer />
    </div>
  );
}

export default Home;
