import style from './Projetos.module.css'
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiNodejs,
  DiJava,
  DiJavascript,
  DiMsqlServer,
} from 'react-icons/di'
import { SiInstructables, SiMysql, SiNodedotjs, SiSqlite, SiTypescript } from 'react-icons/si'

import CardProjeto from '../CardProjeto/CardProjeto'
import { BsFiletypeSql } from 'react-icons/bs'

function Projetos() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="projetos">
      <h1 className={style.Titulos}>Projetos</h1>
      <p className={style.Descricao}>
        Aqui estão alguns dos meus projetos, tanto academicos quando
        profissionais focados em front-end. Contudo nem todos aqui listados
        estão concluídos. Para saber mais sobe as tecnologias clique sobre os
        icones.
      </p>
      <div className={style.IconGroup}>
        <a
          className={style.IconLink}
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiCss3 className={style.Icon} />
          <p>CSS 3</p>
        </a>
        <a
          className={style.IconLink}
          href="https://developer.mozilla.org/pt-BR/docs/Web/html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiHtml5 className={style.Icon} />
          <p>HTML 5</p>
        </a>
        <a
          className={style.IconLink}
          href="https://nodejs.org/pt-br/pt-BR/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiJavascript1 className={style.Icon} />
          <p>Javascript</p>
        </a>
        <a
          className={style.IconLink}
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiBootstrap className={style.Icon} />
          <p>Bootstrap</p>
        </a>
        <a
          className={style.IconLink}
          href="https://nodejs.org/pt-br/pt-BR/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNodedotjs className={style.Icon} />
          <p>Node JS</p>
        </a>

        <a
          className={style.IconLink}
          href="https://pt-br.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiReact className={style.Icon} />
          <p>React JS</p>
        </a>
        <a
          className={style.IconLink}
          href="https://pt-br.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTypescript className={style.Icon} />
          <p>Typescript</p>
        </a>
        <a
          className={style.IconLink}
          href="https://pt-br.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFiletypeSql className={style.Icon} />
          <p>SQL</p>
        </a>
      </div>
      <div className={style.BoxCards}>
        <CardProjeto />
      </div>
    </section>
  )
}

export default Projetos
