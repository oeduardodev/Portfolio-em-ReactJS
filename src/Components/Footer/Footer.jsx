import style from "./Footer.module.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";
function Footer (){
    return(
        <footer className={style.Footer} id="contato">
            <div className={style.Contato}>
            <h4>Clique e Acesse:</h4>
            <li className={style.ItenContato}><BsLinkedin className={style.Icone}/> <a target="_blank"  href="https://www.linkedin.com/in/eduardo-leite-78620b1a3/">Meu Linkedin </a></li>
            <li className={style.ItenContato}><BsGithub className={style.Icone}/> <a target="_blank" href="https://portfolio-em-react-js.vercel.app/"> Meu GitHub </a></li>
            </div>
            <div className={style.Dev}>
            <p>Copyright by Eduardo Leite <br/>25 de fevereiro de 2023</p>
            </div>
        </footer>
    )
}

export default Footer