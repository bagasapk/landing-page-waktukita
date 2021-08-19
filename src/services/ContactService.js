import http from "./http-common";

const post = (data) => {
  return http.post("/hubungikami", data);
};

const apiWaktuKita = {
  post,
};

export default apiWaktuKita;
