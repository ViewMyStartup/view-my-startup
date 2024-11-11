import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../components/PageNav.module.css";

import LogoSvg from "../../public/assets/images/logo_home.js";

export default function PageNav({ onHomeClick }) {
  const router = useRouter();

  const BoardList = () => {
    return (
      <ul className={styles.boardList}>
        <li>
          <Link 
            href="/mycompany"
            className={router.pathname === "/mycompany" ? styles.boardActive : ""}
          >
            나의 기업 비교
          </Link>
        </li>
        <li>
          <Link 
            href="/compare"
            className={router.pathname === "/compare" ? styles.boardActive : ""}
          >
            비교 현황
          </Link>
        </li>
        <li>
          <Link 
            href="/investinfo"
            className={router.pathname === "/investinfo" ? styles.boardActive : ""}
          >
            투자 현황
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className={styles.outlineContain}>
      <section className={styles.pageNavBox}>
        <Link href="/" onClick={onHomeClick}>
          <span>
            <LogoSvg />
          </span>
        </Link>
        <BoardList />
      </section>
    </nav>
  );
}
