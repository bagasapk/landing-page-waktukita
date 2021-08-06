import http from "./http-common";

const getAll = () => {
  return http.get("/product");
};

const apiWaktuKita = {
  getAll,
};

export default apiWaktuKita;
