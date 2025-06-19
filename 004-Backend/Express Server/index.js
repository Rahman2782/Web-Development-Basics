import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//localhost is used when we dont have a server on the internet
    //so we use our device as a server https://localhost:3000

//a port is like a lot of doors on the server, each one has an address
    //and through this port we can go inside our device and find our app that is listening
    //in order to serve the website

//a server has so many ports because it has to listen for many different incoming requests
    //i.e. printers, keynote (phone for remote function), 