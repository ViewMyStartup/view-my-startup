import axios from "axios";

// 개발 서버
const apiUrl = process.env.REACT_APP_API_URL;
console.log("apiUrl:", apiUrl);

// 아래 API 호출 코드 작성

// 기업 전체 리스트 조회 API
export const fetchCompanies = async (params) => {
  const response = await axios.get(`${apiUrl}/companies`, {
    params: {
      page: params.page,
      limit: params.limit,
      search: params.search,
      sort_by: params.sortBy,
      order: params.order,
    },
  });
  return response.data;
};
// 기업 상세 조회 API
