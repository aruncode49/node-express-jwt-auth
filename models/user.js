const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

// Fire a function after a new user is saved to the database
userSchema.post("save", function (doc, next) {
  console.log("new user was created and saved", doc);
  next();
});

// Fire a function before a new user is saved to the database
userSchema.pre("save", function (next) {
  console.log("User about to be created & save", this);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
