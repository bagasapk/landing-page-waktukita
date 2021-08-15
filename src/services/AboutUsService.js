import http from "./http-common";

const getAll = () => {
  return http.get("/aboutus");
};

const apiWaktuKita = {
  getAll,
};

export default apiWaktuKita;
