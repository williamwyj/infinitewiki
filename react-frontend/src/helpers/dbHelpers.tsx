import axios from "axios";

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

export { getAircraftsData };
