import style from "./Footer.module.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";
function Footer (){
    return(
        <div className={style.Footer} id="contato">
            <div className={style.Contato}>
            <h4>Clique e Acesse:</h4>
            <li className={style.ItenContato}><BsLinkedin className={style.Icone}/> <a  href="http://">Meu Linkedin </a></li>
            <li className={style.ItenContato}><BsGithub className={style.Icone}/> <a  href="http://"> Meu GitHub </a></li>
            <li className={style.ItenContato}><TfiInstagram className={style.Icone}/> <a  href="http://">Meu instagram</a></li>
            </div>
            <div className={style.Dev}>
            <p>Copyright by Eduardo Leite <br/>12 de maio de 2022</p>
           
            </div>
        </div>
    )
}

export default Footer