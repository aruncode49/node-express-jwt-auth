const express = require("express");
const mongoose = require("mongoose");

const app = express();
const authRoutes = require("./routes/authRoutes");

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURL =
  "mongodb+srv://aruncode49:eBEZ4o4Mo0WjHH67@cluster0.l3qygh1.mongodb.net/node-auth";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("MongoDB Connected");
    app.listen(3000, () => console.log("Server is running at 3000"));
  })
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);
