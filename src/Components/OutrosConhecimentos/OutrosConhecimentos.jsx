import style from "./OutrosConhecimentos.module.css";
import { Link } from "react-router-dom";

import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

function OutrosConhecimentos() {
  return (
    <div className={style.OutrosConhecimentos} id="outros_conhecimentos">
      <h1 className={style.Titulos}>
        Outros
        <br /> Conhecimentos
      </h1>
      <div className={style.BoxDescIcon}>
        <p className={style.Descricao}>
          Aqui estão algumas outras tecnologias que eu domino e podem lhe
          interessar, lembrado que busco preferencialmente oportunidades como
          desenvolvedor contudo existem exceções.
        </p>
        <div className={style.IconGroup}>
            <Link to="/ProjFigma">
            <FiFigma className={style.Icon}  />
            </Link>
            <Link to="/ProjPhotoshop">
            <SiAdobephotoshop className={style.Icon}  />
            </Link>
            <Link to="/ProjPremiere">
            <SiAdobepremierepro className={style.Icon}  />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default OutrosConhecimentos;
