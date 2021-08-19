import axios from "axios";

export default axios.create({
  baseURL: "https://admin.class-new-dev.waktukita.com/api",
  headers: {
    "Content-Type": "application/json, multipart/form-data",
    Accept: "*/*",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWRtaW4uc3RhZ2luZy5zb29kZXZpZS5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2MTE3MzUxMjYs",
  },
});
