const axiosInstance = require("./lib/axios.js");
require("dotenv").config();

axiosInstance
  .get("/health")
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Error in fetching axios health", error));

const getConcertsByArtistAndCity = async (artist, city) => {
  try {
    const response = await axiosInstance.get("/concerts/search", {
      params: {
        artist: artist,
        city: city,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
getConcertsByArtistAndCity("Taylor Swift", "Las Vegas")
  .then((concerts) => console.log("Concerts Data", concerts))
  .catch((error) => console.log(error));
