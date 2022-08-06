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

export { getFightersData, getAircraftsData };
