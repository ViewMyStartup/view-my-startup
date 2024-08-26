import React from "react";
import styles from "./DataRowSetRender.module.css";

// 컴포넌트
import CompanyDataPerRow from "components/common/CompanyDataPerRow";
import HeaderColumns from "./common/HeaderColumns";

function DataRowSetRender({
  type = "rank",
  dataList = [],
  currentPage,
  limit = 10,
  isloading = false,
}) {
  return isloading ? (
    <section className={styles.loaderBox}>
      <div>로딩</div>
      <div class={styles.loader}></div>
    </section>
  ) : (
    <div className={styles.dataRowSet}>
      <HeaderColumns type={type} />
      <ul>
        {dataList.map((dataObject, index) => (
          <CompanyDataPerRow
            key={dataObject.id} // 리스트를 렌더링할 때, key 추가
            type={type}
            dataObject={dataObject}
            index={index}
            currentPage={currentPage}
            limit={limit}
          />
        ))}
      </ul>
    </div>
  );
}

export default DataRowSetRender;
