import { useEffect, useState } from 'react'
import style from './CardProjeto.module.css'

function CardProjeto() {
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/jovemscript/backendPortfolio/projetos`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setCard(data)
      })
  }, [])

  const [card, setCard] = useState([])

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className={style.Geral}>
      {card.map((repo, key) => {
        return (
          <div className={style.Card} key={key}>
            <div key={repo.id}>
              <img src={repo.image} />
              <h3 className={style.CardTitulo}>{repo.name}</h3>
              <p className={style.CardDesc}>{repo.desc}</p>
              <p className={style.CardState}>
                <span className={`${style[repo.statestyle]}`}>•</span>
                {repo.status}
                <span className={style.Cardtecnologias}>
                  {repo.tecnologias}
                </span>
              </p>
              <a target="_blank" href={repo.botaoProj} rel="noreferrer">
                <button className={style.Codigo}>CÓDIGO</button>
              </a>
              <a target="_blank" href={repo.linkOnline} rel="noreferrer">
                <button className={style.Web}>ACESSAR</button>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardProjeto
