async function signup_get(req, res) {
  res.render("signup");
}

async function login_get(req, res) {
  res.render("login");
}

async function signup_post(req, res) {
  res.send("new signup");
}

async function login_post(req, res) {
  res.send("user login");
}

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post,
};
