import axios from "axios";

// 환경 변수를 사용하여 baseURL 설정
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// 개별 투자자 정보 조회
export const fetchUserData = async (investmentId) => {
  try {
    const response = await apiClient.get(`/api/investments/${investmentId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user data", error);
    throw error;
  }
};

// 다수의 투자자 정보 조회
export const fetchMultipleUserData = async (investmentIds) => {
  try {
    // 여러 요청을 병렬로 수행
    const requests = investmentIds.map(id =>
      apiClient.get(`/api/investments/${id}`)
    );

    const responses = await Promise.all(requests);
    // 응답에서 데이터만 추출
    return responses.map(response => response.data);
  } catch (error) {
    console.error("Failed to fetch multiple user data", error);
    throw error;
  }
};

// 회사 데이터 조회
export const fetchCompanyData = async (companyId) => {
  try {
    const response = await apiClient.get(`/api/companies/${companyId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch company data", error);
    throw error;
  }
};

// 투자자 정보 생성
export const createInvestment = async (investmentData) => {
  try {
    const response = await apiClient.post(`/api/investments`, investmentData);
    return response.data;
  } catch (error) {
    console.error("Failed to create investment", error);
    throw error;
  }
};

// 투자 정보 수정
export const updateInvestment = async (investmentId, investmentData) => {
  try {
    const response = await apiClient.put(
      `/api/investments/${investmentId}`,
      investmentData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update investment", error);
    throw error;
  }
};

// 투자 정보 삭제
export const deleteInvestment = async (investmentId, password) => {
  try {
    await apiClient.delete(`/api/investments/${investmentId}`, {
      data: { password },
    });
    return true;
  } catch (error) {
    console.error("Failed to delete investment", error);
    throw error;
  }
};
