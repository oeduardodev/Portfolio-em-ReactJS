import Container from "../Container/Container";
import Typical from "react-typical";
import styles from "./MenuOC.module.css";
import { Link } from "react-router-dom";

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
        <Link to="/">
           Voltar
        </Link>
        </ul>
      </Container>
    </div>
  );
}

export default Menu;