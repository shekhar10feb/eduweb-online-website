// =====================
//   server / index.js
// =====================

const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const config = require("./config/config");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const databaseConnect = require("./db/databaseConnection");
const sitemapRoutes = require("./routes/sitemapRoutes");

// config.env
dotenv.config({ path: "./config.env" });

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const sess = {
  secret: process.env.SESSION_SECRET || config.sessionSecret, // Ensure the secret is provided
  resave: false, // Recommended setting
  saveUninitialized: false, // Recommended setting
  cookie: {
    // secure: process.env.NODE_ENV === 'production', // Recommended setting in production. However, it requires an https-enabled website (i.e., https://localhost won't work)
    // httpOnly: true,
    sameSite: "strict", // This solution will solve this error => "Some cookies are misusing the recommended “SameSite“ attribute".
    maxAge: 3600000, // 1 hour (in milliseconds)
  },
};

// if (process.env.NODE_ENV === 'production') {
//   app.set("trust proxy", 1); // trust first proxy
//   sess.cookie.secure = true; // serve secure cookies
// }

// Apply session middleware
app.use(session(sess));

// CORS configuration
const whitelist = [process.env.FRONTEND_URL]; // Use environment variable for frontend URL
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// For using favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// For using images
app.use("/collegeCoverImages", express.static("collegeCoverImages"));
app.use("/collegeProfileImages", express.static("collegeProfileImages"));
app.use("/userImages", express.static("userImages"));
app.use("/authorImages", express.static("authorImages"));
app.use("/memberImages", express.static("memberImages"));
app.use("/questionPapers", express.static("questionPapers"));
app.use("/uploadedAds", express.static("uploadedAds"));

app.use("/uploadedAds", express.static(path.join(__dirname, "public")));

// To set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/api/", require("./routes/authRoutes"));
app.use('/sitemap/', sitemapRoutes);

const __directoryname = path.resolve();

// // Serve static files
app.use(express.static(path.join(__directoryname, "/client/dist")));

// // Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__directoryname, "client/dist/index.html"));
});

// Database in IIFE function implementation
const PORT = process.env.PORT;
const DB_user = process.env.DB_for_testing_user;
const DB_pass = process.env.DB_for_testing_pass;

databaseConnect(DB_user, DB_pass);

app.listen(PORT || 3001, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
