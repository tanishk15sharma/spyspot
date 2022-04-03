import axios from "axios";

const getFilteredVideos = (videos, category, searchKey) => {
  return videos
    .filter((video) => {
      if (category === "All") return videos;
      video.category === category;
    })
    .filter(
      (video) =>
        video.title.toLowerCase().includes(searchKey.toLowerCase()) ||
        video.category.toLowerCase().includes(searchKey.toLowerCase())
    );
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
