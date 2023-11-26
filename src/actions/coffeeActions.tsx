export const filterByCategory = (category: string) => ({
  type: "FILTER_BY_CATEGORY",
  payload: category,
});

export const searchCoffee = (query: string) => ({
  type: "SEARCH_COFFEE",
  payload: query,
});
