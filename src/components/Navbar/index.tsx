import ThemeToggle from "../ThemeToggle";
import styles from "./Navbar.module.scss";
import factwiseLogo from "../../assets/factwiseLogo.jpg";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.logoImage} src={factwiseLogo} alt="Factwise Logo" />
        Factwise
      </div>
      <ThemeToggle />
    </nav>
  );
}