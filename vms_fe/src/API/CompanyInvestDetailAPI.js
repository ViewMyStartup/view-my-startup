import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCompanyData = async (companyId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/companies/${companyId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch company data", error);
    throw error;
  }
};

// 투자자 정보 생성
export const createInvestment = async (investmentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/investments`,
      investmentData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create investment", error);
    throw error;
  }
};

// 투자 정보 수정 함수
export const updateInvestment = async (investmentId, investmentData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/investments/${investmentId}`,
      investmentData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update investment", error);
    throw error;
  }
};

// 투자 정보 삭제 함수
export const deleteInvestment = async (investmentId, password) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/investments/${investmentId}`, {
      data: { password },
    });
    return true;
  } catch (error) {
    console.error("Failed to delete investment", error);
    throw error;
  }
};

// 투자자 정보조회
export const fetchUserData = async (investmentId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/investments/${investmentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch User data", error);
    throw error;
  }
};
