import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.mainNav}>
        <ul>
          <Link href={"/"}>
            <a>
              <li> Home </li>
            </a>
          </Link>
          <Link href={"/about"}>
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href={"/blog"}>
            <a>
              <li> Blog </li>
            </a>
          </Link>
          <Link href={"/contact"}>
            <a>
              <li> Contact </li>
            </a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;