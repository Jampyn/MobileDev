const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //sign up
  //http://localhost/apis/auth/signup
  app.post(
    "/apis/auth/signup",
    [verifySignUp.checkDuplicateUserOrEmail, verifySignUp.checkRolesExisted], //middleware
    controller.signup // function
  );

  //sign in
  //http://localhost/apis/auth/signup
  app.post(
    "/apis/auth/signin",  //path
    controller.signin // function
  );
};
