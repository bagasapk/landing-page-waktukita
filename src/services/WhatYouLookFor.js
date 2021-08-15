import http from "./http-common";

const getAll = () => {
  return http.get("/whatyoulookfor");
};

const apiWaktuKita = {
  getAll,
};

export default apiWaktuKita;
