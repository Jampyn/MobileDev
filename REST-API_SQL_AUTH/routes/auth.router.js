const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "X-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //Sign Up
  // http://localhost:5000/apis/auth/signup
  app.post(
    "/apis/auth/signup",
    [verifySignUp.checkDuplicateUserOrEmail, verifySignUp.checkRolesExisted], //middleware
    controller.signup //function
  );

  //Sign In
  // http://localhost:5000/apis/auth/signin
  app.post(
    "/apis/auth/signin", //Path
    controller.signin //function
  );
};
