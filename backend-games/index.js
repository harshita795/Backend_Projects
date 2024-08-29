const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    platform: "Nintendo Switch",
    releaseYear: 2017,
  },
  {
    id: 2,
    title: "God of War",
    genre: "Action-adventure",
    platform: "PlayStation 4",
    releaseYear: 2018,
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    genre: "Role-playing",
    platform: "PC",
    releaseYear: 2020,
  },
  {
    id: 4,
    title: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC",
    releaseYear: 2017,
  },
  {
    id: 5,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Multi-platform",
    releaseYear: 2011,
  },
];

// Exercise 2: Get all games
app.get("/games", (req, res) => {
  res.json({ games });
});

// Exercise 3: Get game by ID
app.get("/games/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let game = games.find((game) => game.id === id);
  res.json({ game });
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
