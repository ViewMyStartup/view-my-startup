import React from "react";
import styles from "./DataRowSetRenderNoRank.module.css";

// 컴포넌트
import CompanyDataPerRowNoRank from "components/common/CompanyDataPerRowNoRank"; // NoRank 전용 컴포넌트
import HeaderColumns from "./common/HeaderColumns";

function DataRowSetRenderNoRank({ type = "noRank", dataList = [] }) {
  return (
    <div className={styles.dataRowSet}>
      <HeaderColumns type={type} />
      <ul>
        {dataList.map((data) => (
          <CompanyDataPerRowNoRank type={type} dataObject={data} />
        ))}
      </ul>
    </div>
  );
}

export default DataRowSetRenderNoRank;

