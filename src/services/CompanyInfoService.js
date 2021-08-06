import http from "./http-common";

const getAll = () => {
  return http.get("/companyinfo");
};

const apiWaktuKita = {
  getAll,
};

export default apiWaktuKita;
