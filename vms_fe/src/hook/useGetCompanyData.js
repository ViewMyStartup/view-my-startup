import { useEffect, useState } from "react";
import getApiData from "API/api";

function useGetCompanyData(
  page = 1,
  limit = 10,
  search = "",
  sortBy = "totalInvestment",
  order = "desc"
) {
  const [companyList, setCompanyList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApiData(page, limit, search, sortBy, order)
      .then((data) => {
        setTotalPages(Math.ceil(data.total / companyCount));
        setCompanyList(data.companies);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [page, limit, search, sortBy, order]);
  return { companyList, isLoading, error, totalPages };
}

export default useGetCompanyData;
