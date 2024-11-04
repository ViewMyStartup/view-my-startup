import axios from "axios";

// 개발 서버
// const apiUrl = window.env.REACT_APP_API_BASE_URL; // 주석처리
// console.log("apiUrl:", apiUrl);

// 아래 API 호출 코드 작성

// 기업 전체 리스트 조회 API
export async function getApiData(page, limit, search, sort_by, order) {
  try {
    const response = await axios.get(
      "https://view-my-startup-inxl.onrender.com/api/companies",
      {
        params: { page, limit, search, sort_by, order },
      }
    );
    // console.log(`Response.Data : ${response.data}`); // 디버깅용
    return response.data;
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
}

export const fetchCompanies = async (page = 1, limit = 10) => {
  const response = await axios.get("https://view-my-startup-inxl.onrender.com/api/companies", {
    params: { page, limit },
  });
  return response.data;
};



// 서버에서 가져온 기업 데이터를 정렬하는 sortCompanies
export const sortCompanies = (companies, option) => {
  const sortedList = [...companies];

  switch (option) {
    case "누적 투자금액 높은순":
      sortedList.sort((a, b) => b.totalInvestment - a.totalInvestment);
      break;
    case "누적 투자금액 낮은순":
      sortedList.sort((a, b) => a.totalInvestment - b.totalInvestment);
      break;
    case "매출액 높은순":
      sortedList.sort((a, b) => b.revenue - a.revenue);
      break;
    case "매출액 낮은순":
      sortedList.sort((a, b) => a.revenue - b.revenue);
      break;
    case "고용 인원 많은순":
      sortedList.sort((a, b) => b.employees - a.employees);
      break;
    case "고용 인원 적은순":
      sortedList.sort((a, b) => a.employees - b.employees);
      break;
    default:
      break;
  }

  return sortedList.map((company, index) => ({
    ...company,
    rank: index + 1,
  }));
};

// 나의 기업을 제외한 나머지 기업들로부터 나의 기업의 순위 근처 기업들을 가져오는 함수
export const getCompaniesForRanking = async (myCompanyId, rankOption) => {
  try {
    // 모든 기업 데이터 가져오기
    const response = await fetchCompanies();
    const allCompanies = response.companies;

    console.log("베포된 서버에 있는 모든 기업 목록:", allCompanies);

    // 데이터가 배열인지 확인
    if (!Array.isArray(allCompanies)) {
      throw new Error("서버에서 잘못된 데이터 형식이 반환되었습니다.");
    }

    // 나의 기업 ID가 유효한지 확인
    if (!myCompanyId) {
      throw new Error("유효한 기업 ID가 제공되지 않았습니다.");
    }

    // 전체 기업 리스트를 정렬
    const sortedCompanies = sortCompanies(allCompanies, rankOption);

    console.log("정렬된 기업들:", sortedCompanies);
    console.log("나의 기업 ID:", myCompanyId);

    // 나의 기업의 순위 찾기
    const myCompanyIndex = sortedCompanies.findIndex(company => company.id === myCompanyId);

    if (myCompanyIndex === -1) {
      console.error(`나의 기업 (${myCompanyId})이 데이터에 존재하지 않습니다.`);
      throw new Error("나의 기업이 데이터에 존재하지 않습니다.");
    }

    // 나의 기업의 순위가 중간 순위일 경우: 위 2개, 아래 2개 기업 포함
    if (myCompanyIndex > 1 && myCompanyIndex < sortedCompanies.length - 2) {
      const topCompanies = sortedCompanies.slice(myCompanyIndex - 2, myCompanyIndex);
      const bottomCompanies = sortedCompanies.slice(myCompanyIndex + 1, myCompanyIndex + 3);
      return [...topCompanies, sortedCompanies[myCompanyIndex], ...bottomCompanies];
    }

    // 나의 기업의 순위가 중간 순위가 아닐 경우 (나의 기업 포함 총 5개 기업 조회)
    const startIndex = Math.max(myCompanyIndex - 2, 0);
    const endIndex = Math.min(myCompanyIndex + 2, sortedCompanies.length - 1);

    // 나의 기업 포함하여 5개의 기업 추출
    return sortedCompanies.slice(startIndex, endIndex + 1);
  } catch (error) {
    console.error("기업 순위 데이터 로딩 실패:", error);
    throw error;
  }
};

