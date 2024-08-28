import { useEffect, useState } from "react";
import { getApiData } from "API/api";

function useGetCompanyData(
  page = 1,
  limit = 10,
  search = "",
  sortBy = "mySelectionCount",
  order = "desc"
) {
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    // console.log(`sortBy & order: ${sortBy}, order: ${order}`) // 디버깅용
    setIsLoading(true)
    getApiData(page, limit, search, sortBy, order)
      .then((data) => {
        setTotalPages(Math.ceil(data.total / limit));
        setCompanyList(data.companies);
        // console.log(`useEffect : ${data}`) // 디버깅용
        // console.log(`useEffect : ${data.companies.totalInvestment}`) // 디버깅용
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
      // console.log(`totalPage : ${totalPages}`) // 디버깅용
  }, [page, limit, search, sortBy, order]);

  return { companyList, isLoading, error, totalPages };
}

export default useGetCompanyData;
