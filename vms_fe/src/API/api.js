import axios from "axios";

// 개발 서버
const apiUrl = process.env.REACT_APP_API_URL;
console.log("apiUrl:", apiUrl);

// 아래 API 호출 코드 작성

// 기업 전체 리스트 조회 API
export async function getApiData(page, limit, search, sort_by, order) {
  try {
    const response = await axios.get("https://view-my-startup.onrender.com/api/companies", {
      params: { page, limit, search, sort_by, order },
    });
    return response.data;
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
}

// 기업 상세 조회 API

