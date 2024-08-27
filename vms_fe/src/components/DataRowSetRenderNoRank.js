import React from "react";
import styles from "./DataRowSetRenderNoRank.module.css";

// 컴포넌트
import CompanyDataPerRowNoRank from "components/common/CompanyDataPerRowNoRank"; // NoRank 전용 컴포넌트
import HeaderColumns from "./common/HeaderColumns";

function DataRowSetRenderNoRank({
  type = "rank",
  dataList = [],
  currentPage,
  limit = 10,
  isloading = false,
}) {
  return isloading ? (
    <div className={`${styles.dataRowSet} ${styles.fadeInUpContents}`}>
      <HeaderColumns type={type} />
      <section className={styles.loaderBox}>
        <div>Loading...</div>
        <div className={styles.loader}></div>
      </section>
    </div>
  ) : (
    <div className={`${styles.dataRowSet} ${styles.fadeInUpContents}`}>
      <HeaderColumns type={type} />
      <ul>
        {dataList.map((dataObject, index) => {
          return (
            <CompanyDataPerRowNoRank
              key={dataObject ? dataObject.id : index} // 리스트를 렌더링할 때, key 추가
              type={type}
              dataObject={dataObject}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DataRowSetRenderNoRank;
