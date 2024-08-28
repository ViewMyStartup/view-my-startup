import axios from "axios";

// 개발 서버
const apiUrl = process.env.REACT_APP_API_URL;
console.log("apiUrl:", apiUrl);

// 아래 API 호출 코드 작성

// 기업 전체 리스트 조회 API
export async function getApiData(page, limit, search, sort_by, order) {
  try {
    const response = await axios.get(
      "https://view-my-startup.onrender.com/api/companies",
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

// 서버에서 가져온 기업 데이터
export const fetchCompanies = async () => {
  if (!apiUrl) {
    throw new Error("API URL이 설정되지 않았습니다.");
  }
  const response = await axios.get(`${apiUrl}/api/companies`);
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

