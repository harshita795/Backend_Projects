const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {
  createItinerary,
  getItinerary,
} = require("./controllers/dataController.js");
const {
  getFlights,
  getHotels,
  getSites,
  getFlightByOriginAndDestination,
  getHotelsByLocation,
  getSitesByLocation,
} = require("./controllers/itineraryController.js");
const { sequelize } = require("./models/index.js");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/itinerary", createItinerary);
app.get("/itinerary/:id", getItinerary);

app.get("/data/flights", getFlights);
app.get("/data/hotels", getHotels);
app.get("/data/sites", getSites);
app.get("/flights/search", getFlightByOriginAndDestination);
app.get("/hotels/search", getHotelsByLocation);
app.get("/sites/search", getSitesByLocation);

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.error("Unable to connect to database", error);
  });

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
