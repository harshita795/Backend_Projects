const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { createTour, getTour } = require("./controllers/dataController.js");
const {
  getConcerts,
  getAfterParties,
  getMerchandiseStalls,
  getConcertsByArtistAndCity,
  getMerchandiseStallsByStallName,
  getAfterPartiesByCity,
} = require("./controllers/tourController.js");
const { sequelize } = require("./models/index.js");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/tour", createTour);
app.get("/tour/:id", getTour);

app.get("/data/concerts", getConcerts);
app.get("/data/afterParties", getAfterParties);
app.get("/data/merchandiseStalls", getMerchandiseStalls);
app.get("/concerts/search", getConcertsByArtistAndCity);
app.get("/merchandiseStalls/search", getMerchandiseStallsByStallName);
app.get("/afterParties/search", getAfterPartiesByCity);

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
