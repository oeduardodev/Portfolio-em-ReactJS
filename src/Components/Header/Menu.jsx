import Container from "../Container/Container";
import styles from "./Menu.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-scroll";

function Menu() {
  AOS.init();

  return (
    <div data-aos="fade-down" className={styles.MenuContainer}>
      <Container>
        <nav className={styles.MenuDesk}>
          <img
            className={styles.Logo}
            src="../../../public/logo.png"
            alt=""
            srcset=""
          />

          <ul>
            <li>
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="outros_conhecimentos"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Outros Conhecimentos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="formacao"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Formação
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.MenuMobile}></nav>
      </Container>
    </div>
  );
}

export default Menu;
