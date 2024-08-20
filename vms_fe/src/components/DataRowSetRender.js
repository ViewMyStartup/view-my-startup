import React from "react";
import styles from "./DataRowSetRender.module.css";

// 컴포넌트
import CompanyDataPerRow from "components/common/CompanyDataPerRow";
import HeaderColumns from "./common/HeaderColumns";

function DataRowSetRender({ type = "rank", dataList = [] }) {
  return (
    <div className={styles.dataRowSet}> 
      <HeaderColumns type={type} />
      <ul>
        {dataList.map((data) => (
          <CompanyDataPerRow type={type} dataObject={data} />
        ))}
      </ul>
    </div>

  );
}

export default DataRowSetRender;