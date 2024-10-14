const model = require("../models/indexmodel.js");
const auth = {};

auth.loginform = async function (req, res) {
  res.render("../views/login");
};

auth.login = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;
    const user = await model.user.findOne({
      where: { email: email, password: password },
    });
    if (user === null) {
      // res.redirect("/login");
      res.status(404).json({ message: error });
      console.log("Not found!");
    } else {
      req.session.loggedin = true;
      req.session.email = email;
      res.status(200).json({user});

      // console.log(req.session);
      // res.redirect("/dashboard");
    }
    // console.log(password);
  } catch (err) {}
};

module.exports = auth;
