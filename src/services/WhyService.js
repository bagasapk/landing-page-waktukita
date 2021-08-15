import http from "./http-common";

const getAll = () => {
  return http.get("/why");
};

const apiWaktuKita = {
  getAll,
};

export default apiWaktuKita;
