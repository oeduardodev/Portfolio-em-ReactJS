import style from './Sobre.module.css'

function Sobre() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-offset="300"
      className={style.BoxGeral}
      id="sobre"
    >
      <div className={style.TextoSobre}>
        <p>
Sou extremamente curioso e apaixonado por tecnologia. Realizo alguns freelancers como desenvolvedor frontend. Atualmente, estou focado em maximizar meus conhecimentos em React.js e Node.js.
        </p>
      </div>
    </section>
  )
}

export default Sobre
