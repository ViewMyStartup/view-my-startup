export const SortingOptions = (option) => {
  let sortBy;
  let order;

  switch (option) {
    case "누적 투자금액 높은순":
      sortBy = "totalInvestment";
      order = "desc";
      break;
    case "누적 투자금액 낮은순":
      sortBy = "totalInvestment";
      order = "asc";
      break;
    case "매출액 높은순":
      sortBy = "revenue";
      order = "desc";
      break;
    case "매출액 낮은순":
      sortBy = "revenue";
      order = "asc";
      break;
    case "고용 인원 많은순":
      sortBy = "employees";
      order = "desc";
      break;
    case "고용 인원 적은순":
      sortBy = "employees";
      order = "asc";
      break;
    default: // 기본값
      sortBy = "revenue";
      order = "desc";
  }

  return { sortBy, order };
};
