import React from "react";
import styles from "./DataRowRender.module.css";

// 컴포넌트
import CompanyDataPerRow from "components/common/CompanyDataPerRow";

function DataRowSetRender({ type = "rank", dataList = [] }) {
  return (
    <ul className={styles.dataRowSet}>
      {dataList.map((data) => (
        <CompanyDataPerRow type={type} dataObject={data} />
      ))}
    </ul>
  );
}

export default DataRowSetRender;