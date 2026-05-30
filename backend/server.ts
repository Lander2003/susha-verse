import express from "express";

const app = express();

app.get("/", (req, res, next) => {
    res.json("Requests at route /");
})

app.listen(3000, () => {
    console.log("Running on port 3000");
})