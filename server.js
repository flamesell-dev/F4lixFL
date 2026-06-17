const express = require("express");
const app = express();

app.use(express.json());

let lastMessage = {
    id: 0,
    message: ""
};

app.get("/", (req, res) => {
    res.send("F4lixFL Online");
});

app.post("/send", (req, res) => {
    lastMessage.id++;
    lastMessage.message = req.body.message || "";

    res.json({
        success: true
    });
});

app.get("/message", (req, res) => {
    res.json(lastMessage);
});

app.get("/test", (req, res) => {
    lastMessage.id++;
    lastMessage.message = "Hello From F4lixFL";

    res.send("OK");
});

app.listen(process.env.PORT || 3000);
