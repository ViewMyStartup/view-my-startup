import React from "react";
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
  onOpenModal, // 모달 열기 핸들러
  onCloseModal, // 모달 닫기 핸들러
  activeDropdownId, // 현재 활성화된 드롭다운 ID
}) {
  return isloading ? (
    <div className={`${styles.dataRowSet} ${styles.fadeInUpContents}`}>
      <HeaderColumns type={type} />
      <section className={styles.loaderBox}>
        <div className={styles.loader}></div>
        <div>로딩중...</div>
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
              activeDropdownId={activeDropdownId} // 현재 활성화된 드롭다운의 ID를 전달
              onOpenModal={onOpenModal} // 모달 열기 핸들러 전달
              onCloseModal={onCloseModal} // 모달 닫기 핸들러 전달
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DataRowSetRender;
