import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "dfc7c8af891b4aaa802f59a2f09b0d1d",
  },
});
