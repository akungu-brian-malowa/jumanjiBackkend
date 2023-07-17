const app = require("./app");
const connectDatabase = require("./db/Database");
const mongoose = require('mongoose');

//const PORT = 8000;
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
  }

//Handling Uncought Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

//connect db
connectDatabase();

//create server
app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`shutting down the server for ${err.message}`);
  console.log(`shutting down the server for handling promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
