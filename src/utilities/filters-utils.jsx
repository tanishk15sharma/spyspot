const getFilteredVideos = (products, category) => {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
};
export { getFilteredVideos };
