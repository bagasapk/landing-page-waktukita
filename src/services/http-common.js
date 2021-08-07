import axios from "axios";

export default axios.create({
  baseURL: "https://admin.class-new-dev.waktukita.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
