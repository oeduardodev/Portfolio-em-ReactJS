import style from "./Projetos.module.css";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiReact } from "react-icons/di";
import CardProjeto from "../CardProjeto/CardProjeto";

function Projetos() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="projetos">
      <h1 className={style.Titulos}>Projetos</h1>
      <p className={style.Descricao}>
        Aqui estão alguns dos meus projetos, tanto academicos quando
        profissionais. Para filtralos basta clicar no icone da tecnologia que
        voce deseja. Contudo nem todos aqui listados estão concluídos.
      </p>
      <div className={style.IconGroup}>
        <a className={style.IconLink} href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer"> 
          <DiCss3 className={style.Icon}/> 
          <p>CSS 3</p>
        </a>
        <a className={style.IconLink} href="https://developer.mozilla.org/pt-BR/docs/Web/html" target="_blank" rel="noopener noreferrer">
          <DiHtml5 className={style.Icon} />
          <p>HTML 5</p>
        </a>
        <a className={style.IconLink} href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
          <DiBootstrap className={style.Icon} />
          <p>Bootstrap 5</p>
        </a>
        <a className={style.IconLink} href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <DiJavascript1 className={style.Icon} />
          <p>JavaScript</p>
        </a>
        <a className={style.IconLink} href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer">
          <DiReact className={style.Icon} />
          <p>React JS</p>
        </a>
      </div>
      <div className={style.BoxCards}>
        <CardProjeto />
      </div>
    </section>
  );
}

export default Projetos;
