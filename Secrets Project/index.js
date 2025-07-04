//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser"; //part of express now (express.urlencoded)
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();
var correct = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(getPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(correct) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function getPassword(req, res, next) {
    var userPassword = req.body["password"];
    if(userPassword === "ILoveProgramming") {
        correct = true;
    }
    next();
}

