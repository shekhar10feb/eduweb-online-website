// =====================
//   server / index.js
// =====================

const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const csv = require("fast-csv");
const app = express();
const favicon = require("serve-favicon");
const { data } = require("autoprefixer");
const bodyParser = require("body-parser");
const User = require("./models/user.models");
const fs = require("fs-extra");
const mongoose = require("mongoose");

// Middlewares
app.use(express.json());
// app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.use(
//   cors({
//     allowOrigins: "http://localhost:5173/",
//     allowCredentials: true,
//     exposeHeaders: "Date, x-api-id",
//     allowMethods: "GET, POST, DELETE, *",
//     allowHeaders: "Authorization, *",
//   })
// );

// app.use(express.static("server/public"));
app.use(express.static(path.join(__dirname, "public")));
// For using favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// For using images
app.use("/collegeCoverImages", express.static("collegeCoverImages"));
app.use("/collegeProfileImages", express.static("collegeProfileImages"));
app.use("/userImages", express.static("userImages"));
app.use("/authorImages", express.static("authorImages"));
// app.use(express.static(path.join(__dirname, "public/authorImages")));
// app.use(express.static(path.join(__dirname, "public", "")));
app.use("/memberImages", express.static("memberImages"));
app.use("/questionPapers", express.static("questionPapers"));
app.use("/uploadedAds", express.static("uploadedAds"));

app.use("/uploadedAds", express.static(path.join(__dirname, "public")));


// To set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Here we expose your public folder
// app.use(express.static(path.join(__dirname, "public")));

// config.env
dotenv.config({ path: "./config.env" });
// dotenv.config();
// dotenv.config({ path: "../config.env" });


// Routes
app.use("/api/", require("./routes/authRoutes"));

const __directoryname = path.resolve();
app.use(express.static(path.join(__directoryname, "/client/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__directoryname, "client/dist/index.html"));
})

// Database in IIFE function implementation
const PORT = process.env.PORT;
const DB_user = process.env.DB_for_testing_user;
const DB_pass = process.env.DB_for_testing_pass;

(async function (username, password, PORT) {
  // const db = `mongodb+srv://${username}:${password}@cluster0.a1yo0fh.mongodb.net/myDatabase?retryWrites=true&w=majority`;
  const db = `mongodb+srv://${username}:${password}@cluster0.azjd7rl.mongodb.net/EduWeb_Online?retryWrites=true&w=majority&appName=Cluster0`;
  
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // console.log("MongoDB connected...");

      app.listen(PORT || 3001, (err) => {
        if (err) console.log(err);
        console.log(`Server listening on ${PORT}`);
      });
    })
    .catch((err) => console.log(err));
})(DB_user, DB_pass, PORT);
