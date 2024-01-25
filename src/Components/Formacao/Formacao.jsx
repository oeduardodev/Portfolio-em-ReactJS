import style from './Formacao.module.css'

function Formacao() {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="280"
      data-aos-duration="1200"
      id="formacao"
      className={style.Formacao}
    >
      <h1 className={style.Titulos}>Formação</h1>
      <h2>Análise e Desenvolvimento de Sistemas.</h2>
      <p className={style.Org}>Faculdade Vincit - EAD Noturno</p>

      <h2>React.JS Completo.</h2>
      <p className={style.Org}>Matheus Battisti - Hora de Codar.</p>

      <h2>Curso de Backend com Node.JS .</h2>
      <p className={style.Org}>Cubos Academy - Bolsa Ifood 1000</p>

      <h2>Trilha React.JS </h2>
      <p className={style.Org}>Plataforma - Rocketseat</p>

      <h2>SQL e MySQL fundamentos </h2>
      <p className={style.Org}>Matheus Battisti - Hora de Codar.</p>

      <h2>Curso Básico de Bootstrap.</h2>
      <p className={style.Org}>Hcode Treinamentos.</p>

      <h2>Javascript para Iniciantes. </h2>
      <p className={style.Org}>Canal Dev Aprender - Youtube.</p>

      <h2>Figma, Criando Interfaces.</h2>
      <p className={style.Org}>Canal Gabriel Silvestri - Youtube.</p>
    </div>
  )
}

export default Formacao
