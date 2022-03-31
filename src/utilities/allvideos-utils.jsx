import axios from "axios";

const getFilteredVideos = (products, category) => {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
};

const getAllVideos = async () => {
  try {
    const { data } = await axios.get("/api/videos");
    return data.videos;
  } catch (err) {
    console.log(err);
  }
};

export { getFilteredVideos, getAllVideos };
