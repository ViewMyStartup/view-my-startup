import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { fetchCompanyData, fetchUserData } from 'API/CompanyInvestDetailAPI';

const CompanyDataContext = createContext();

export const CompanyDataProvider = ({ children, companyId }) => {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [transformedInvestments, setTransformedInvestments] = useState([]);

  const transformInvestmentData = (data) => {
    return data.map((item) => ({
      id: item.investment.id,
      userName: item.investment.investorName,
      userRank: item.rank || "X",
      userTotalInvestment: item.investment.investmentAmount,
      userComment: item.investment.investmentComment,
    })).sort((a, b) => parseInt(a.userRank, 10) - parseInt(b.userRank, 10));
  };

  const fetchData = useCallback(async () => {
    try {
      const companyResponse = await fetchCompanyData(companyId);
      if (companyResponse) {
        setCompanyData(companyResponse);

        const investments = companyResponse.investments || [];
        const userDataPromises = investments.map((inv) => fetchUserData(inv.id));
        const userDataResponses = await Promise.all(userDataPromises);

        const investmentsWithRank = transformInvestmentData(userDataResponses);
        setTransformedInvestments(investmentsWithRank);
      } else {
        console.error("API 요청에서 받아온 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("데이터 요청 중 에러:", error);
    } finally {
      setLoading(false);
    }
  }, [companyId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <CompanyDataContext.Provider value={{ companyData, transformedInvestments, loading, fetchData }}>
      {children}
    </CompanyDataContext.Provider>
  );
};

export const useCompanyData = () => useContext(CompanyDataContext);
