import express from "express";
import morgan from "morgan";
//when we send a request to the server (GET), the console 
//displays the date and time, type, url, status code, and other 
//pieces of info for the requst

const app = express();
const port = 3000;

app.use(morgan("tiny")); //should be before any handlers

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
