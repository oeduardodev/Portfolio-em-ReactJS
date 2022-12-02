import MenuOC from "../MenuOC";
import CardsOC from "../CardsOC/CardsOC";
import styles from "./Figma.module.css";
function Figma() {
  return (
    <div id="ProjFigma">
      <MenuOC />
      <div className={styles.TextoOC}>
        <h1>Meus projetos com o Figma</h1>
        <p>
          Então pessoal aqui estão alguns dos meus projetos utilizando o Figma,
          espero que gostem.
        </p>
      </div>
      <CardsOC />
    </div>
  );
}

export default Figma;
