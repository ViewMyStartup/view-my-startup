import { getApiData } from "./api.js";
import { SortingOptions } from "utils/sorting.js";

const fetchData = async (
  currentPage,
  companiesPerPage,
  searchQuery,
  sortOption
) => {
  const { sortBy, order } = SortingOptions(sortOption);
  let result = { companies: [], total: 0 };

  try {
    const data = await getApiData(
      currentPage,
      companiesPerPage,
      searchQuery,
      sortBy,
      order
    );

    const rankToCompanies = data.companies.map((company, index) => ({
      ...company,
      rank: (currentPage - 1) * companiesPerPage + index + 1,
    }));

    result = {
      companies: rankToCompanies,
      total: data.total,
    };
  } catch (error) {
    console.error("fetch error:", error);
  }

  return result;
};

export default fetchData;
