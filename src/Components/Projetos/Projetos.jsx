import style from "./Projetos.module.css";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiReact } from "react-icons/di";
import CardProjeto from "../CardProjeto/CardProjeto";

function Projetos() {


  return (
    <div id="projetos">
      <h1 className={style.Titulos}>Projetos</h1>
      <p className={style.Descricao}>Aqui estão alguns dos meus projetos, tanto academicos quando profissionais. Para filtralos basta clicar no icone da tecnologia que voce deseja. Contudo nem todos aqui listados estão concluídos.</p>
      <div className={style.IconGroup}>
        <DiCss3 className={style.Icon} />
        <DiHtml5 className={style.Icon} />
        <DiBootstrap className={style.Icon} />
        <DiJavascript1 className={style.Icon} />
        <DiReact className={style.Icon} />
      </div>
      <div className={style.BoxCards}>
      <CardProjeto/>
      
      </div>

    </div>
  );
}

export default Projetos;
