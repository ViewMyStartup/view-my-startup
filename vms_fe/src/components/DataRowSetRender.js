import React from "react";
import { Link } from "react-router-dom";
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
          <Link key={data.name} to={`/id/${data.name}`}>
            <CompanyDataPerRow type={type} dataObject={data} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DataRowSetRender;
