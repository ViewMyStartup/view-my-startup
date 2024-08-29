import React, { useState } from "react";
import styles from "./DataRowSetRender.module.css";
import CompanyDataPerRow from "components/common/CompanyDataPerRow";
import HeaderColumns from "./common/HeaderColumns";

function DataRowSetRender({
  type = "rank",
  dataList = [],
  currentPage,
  limit = 10,
  isloading = false,
  myCompanyId,
}) {
  const [activeDropdownId, setActiveDropdownId] = useState(null);

  const handleDropdownToggle = (id) => {
    setActiveDropdownId(activeDropdownId === id ? null : id);
  };

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
            <CompanyDataPerRow
              key={dataObject ? dataObject.id : index}
              type={type}
              dataObject={dataObject}
              index={index}
              currentPage={currentPage}
              limit={limit}
              myCompanyId={myCompanyId}
              activeDropdownId={activeDropdownId}
              onDropdownToggle={handleDropdownToggle}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DataRowSetRender;
