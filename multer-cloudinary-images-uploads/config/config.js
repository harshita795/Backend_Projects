require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.SUPABASE_PASSWORD,
    database: process.env.NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};