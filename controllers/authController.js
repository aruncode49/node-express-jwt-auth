const User = require("../models/user");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // Duplicate error code
  if (err.code === 11000) {
    errors.email = "that email is already registered";
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// Create JWT Tokens
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "arucode49 secret", { expiresIn: maxAge });
};

async function signup_get(req, res) {
  res.render("signup");
}

async function login_get(req, res) {
  res.render("login");
}

async function signup_post(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

async function login_post(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
}

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post,
};
