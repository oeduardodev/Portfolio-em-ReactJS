import style from "./Footer.module.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";
function Footer (){
    return(
        <div data-aos="fade-up"data-aos-anchor-placement="top-center" className={style.Footer} id="contato">
            <div className={style.Contato}>
            <h4>Clique e Acesse:</h4>
            <li className={style.ItenContato}><BsLinkedin className={style.Icone}/> <a  href="http://">Meu Linkedin </a></li>
            <li className={style.ItenContato}><BsGithub className={style.Icone}/> <a  href="http://"> Meu GitHub </a></li>
            <li className={style.ItenContato}><TfiInstagram className={style.Icone}/> <a  href="http://">Meu instagram</a></li>
            </div>
            <div className={style.Dev}>
            <p>Copyright by Eduardo Leite <br/>09 de janeiro de 2023</p>
           
            </div>
        </div>
    )
}

export default Footer