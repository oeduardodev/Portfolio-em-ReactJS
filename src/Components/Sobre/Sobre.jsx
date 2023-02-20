import style from "./Sobre.module.css";

function Sobre() {
  return (
      <section data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" className={style.BoxGeral} id="sobre">
        <div className={style.TextoSobre}>
          <p>
            Sou extremamente curioso, apaixonado por tecnologia e artes digitais. 
            Sempre busco aprender mais como desenvolvedor. Atualmente estou focando 
            em maximizar meus conhecimentos em ReactJS. Procuro oportunidades para contribuir 
            com empresas e projetos que priorizam parceiras duradouras.
          </p>
        </div>
      </section>
  );
}

export default Sobre;
