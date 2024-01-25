import style from './OutrosConhecimentos.module.css'
import { Link } from 'react-router-dom'

import { FiFigma } from 'react-icons/fi'
import { SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si'

function OutrosConhecimentos() {
  return (
    <div className={style.OutrosConhecimentos} id="outros_conhecimentos">
      <div className={style.BoxTexto}>
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1500"
          className={style.Titulos}
        >
          Outros
          <br /> Conhecimentos
        </h1>
        <p
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos="fade-right"
          className={style.Descricao}
        >
          Aqui estão algumas outras tecnologias que eu domino e podem lhe
          interessar, lembrado que busco preferencialmente oportunidades como
          desenvolvedor contudo existem exceções.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        className={style.IconGroup}
      >
        <a
          className={style.IconLink}
          href="https://www.figma.com/login"
          target="_blank"
          rel="noreferrer"
        >
          <FiFigma className={style.Icon} />
          <p>Figma</p>
        </a>
        <a
          className={style.IconLink}
          href="https://www.adobe.com/br/products/photoshop.html"
          target="_blank"
          rel="noreferrer"
        >
          <SiAdobephotoshop className={style.Icon} />
          <p>Photoshop</p>
        </a>

        <a
          className={style.IconLink}
          href="https://www.adobe.com/br/products/premiere.html"
          target="_blank"
          rel="noreferrer"
        >
          <SiAdobepremierepro className={style.Icon} />
          <p>Premiere</p>
        </a>
      </div>
    </div>
  )
}

export default OutrosConhecimentos
