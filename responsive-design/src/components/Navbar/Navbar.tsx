import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li>Catalog</li>
      <li>About us</li>
      <li>Contacts</li>
      <li className={styles.brandName}>BRANDNAME</li>
    </ul>
  );
};
