import { useEffect, useState } from "react";
import style from "./CardProjeto.module.css"


function CardProjeto() {
  useEffect(() => {
    fetch(`http://localhost:3000/projetos/`)
      .then((response) => response.json())
      .then((data) => {
        setCard(data);
      });
  }, []);

  const [card, setCard] = useState([]);

  return (
    <div className={style.Geral}>
      {card.map((repo, key) => {
        return (
          <div className={style.Card} key={key}>
            <div key={repo.id}>
            <img src={repo.image}/>
            <li className={style.CardTitulo}>{repo.name}</li>
            <li className={style.CardDesc}>{repo.desc}</li>
            <a target="_blank" href={repo.botaoProj} ><button className={style.Codigo}>CÓDIGO</button></a>   
            <a target="_blank" href={repo.linkOnline}><button className={style.Web}>ACESSAR</button></a>          
            </div>  
          </div>
        );
      })}
    </div>
  );
}

export default CardProjeto;
