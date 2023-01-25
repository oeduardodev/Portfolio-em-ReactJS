import style from "./Sobre.module.css";

function Sobre() {
  return (
      <section data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" className={style.BoxGeral} id="sobre">
        <div className={style.TextoSobre}>
          <p>
            Olá, tudo bem? Espero que sim. Sou extremamente curioso, apaixonado
            por tecnologia e artes digitais. Sempre busco aprender mais sobre a
            área para evoluir profissionalmente. Durante minha jornada, o
            contato com experiências diversas me ajudou a adquirir habilidades
            para me adaptar com maior facilidade e ter agilidade no aprendizado.
            Procuro oportunidades para contribuir com empresas e projetos que
            priorizam parceiras duradouras.
          </p>
        </div>
      </section>
  );
}

export default Sobre;
