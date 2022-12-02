import Container from "../Container/Container";
import Typical from "react-typical";
import styles from "./Menu.module.css";
import { Link } from "react-scroll";

function Menu() {

  return (
    <div className={styles.MenuContainer}>
      <Container >
        <h4>
          {" "}
          <Typical
            loop={Infinity}
            steps={["Eduardo Leite", 3000, "@JovemScript", 3000]}
          />
        </h4>

        <ul>
          <li><Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={1800}>Sobre</Link></li>
          <li><Link activeClass="active" to="projetos" spy={true} smooth={true} offset={50} duration={1800}>Projetos</Link></li>
          <li><Link activeClass="active" to="outros_conhecimentos" spy={true} smooth={true} offset={50} duration={1800}>Outros Conhecimentos</Link></li>
          <li><Link activeClass="active" to="formacao" spy={true} smooth={true} offset={50} duration={1800}>Formação</Link></li>
          <li><Link activeClass="active" to="contato" spy={true} smooth={true} offset={50} duration={1800} >Contato</Link></li>
        </ul>
      </Container>
    </div>
  );
}

export default Menu;
