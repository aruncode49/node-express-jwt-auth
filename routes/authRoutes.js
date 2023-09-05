const express = require("express");

// import all controller functions
const {
  signup_get,
  signup_post,
  login_get,
  login_post,
} = require("../controllers/authController");

// require router from express
const router = express.Router();

// initializing routes
router.get("/signup", signup_get);
router.post("/signup", signup_post);
router.get("/login", login_get);
router.post("/login", login_post);

// export the router
module.exports = router;
