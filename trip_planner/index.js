const axiosInstance = require("./lib/axios");
require("dotenv").config();

axiosInstance
  .get("/health")
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Error fetching the axios health", error));

const getFlight = async (origin, destination) => {
  try {
    const response = await axiosInstance.get("/flights/search", {
      params: {
        origin: origin,
        destination: destination,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getFlight("bengaluru", "dehradun")
  .then((flights) => console.log("Flights data", flights))
  .catch((error) => {
    console.log(error);
  });
