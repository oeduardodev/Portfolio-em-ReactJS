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
          Sou extremamente curioso e apaixonado por tecnologia e artes digitais.
          Atualmente, estou focado em maximizar meus conhecimentos em React.JS e
          Node.JS. No entanto, estou sempre disposto a aprender novas
          tecnologias, vale ressaltar que sempre tive muito interesse pela área
          de suporte tecnico e relacionamento com cliente. Ainda estou em busca
          da minha primeira oportunidade sólida e duradoura na área da
          tecnologia.
        </p>
      </div>
    </section>
  )
}

export default Sobre
