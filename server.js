const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));

app.post("/submit", upload.fields([{ name: "commentsFile" }, { name: "tokensFile" }]), (req, res) => {
    const { wallPostId, resumePostId, haterName, speed } = req.body;
    const commentsFile = req.files["commentsFile"] ? req.files["commentsFile"][0].path : null;
    const tokensFile = req.files["tokensFile"] ? req.files["tokensFile"][0].path : null;

    console.log("Wall Post ID:", wallPostId);
    console.log("Resume Post ID:", resumePostId);
    console.log("Hater Name:", haterName);
    console.log("Speed:", speed);
    console.log("Comments File Path:", commentsFile);
    console.log("Tokens File Path:", tokensFile);

    res.send("Form submitted successfully!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
