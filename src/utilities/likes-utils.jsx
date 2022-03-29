import axios from "axios";

const likeVideo = async (video, setLike, like) => {
  const token = localStorage.getItem("token");
  {
    if (like.find((item) => item._id === video._id)) {
      alert("this is liked already !!!");
      return;
    }
    try {
      const { data } = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setLike(data.likes);
    } catch (err) {
      console.log(err);
    }
  }
};
export { likeVideo };
