import React from "react";
import PageNav from "components/PageNav";
import HeaderColumns from "components/common/HeaderColumns";
import styles  from "./InvestInfoPage.module.css"

function InvestInfoPage() {
  return (
    <div className={styles.bgSet}>
      <nav className={styles.navSet}>
        <PageNav />
      </nav>
      <main className={styles.mainContainer}>
        
        <header className={styles.headerBox}>
          <span className={styles.headerText}>투자 현황</span>
          <HeaderColumns type="invest" />
        </header>
        
        
        <section>
        </section>
      </main>

    </div>
  );
}

export default InvestInfoPage;
