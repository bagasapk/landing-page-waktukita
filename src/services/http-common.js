import axios from "axios";

export default axios.create({
  baseURL: "https://admin.class-new.waktukita.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
