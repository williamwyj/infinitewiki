import axios from "axios";

const getFightersData = function () {
  return axios
    .get(`/api/aircrafts/fighters`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAircraftsData = function () {
  return axios
    .get(`/api/aircrafts`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getResearchAgreement = function () {
  return axios
    .get(`/api/researchAgreement`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getResearchAgreementFilters = function () {
  return axios
    .get(`/api/researchAgreementFilters`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getFightersData,
  getAircraftsData,
  getResearchAgreement,
  getResearchAgreementFilters,
};
