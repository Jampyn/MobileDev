const { authjwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "X-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // http://localhost:5000/apis/auth/all
  app.get("/apis/test/all", controller.allAccess);

  // http://localhost:5000/apis/auth/user
  app.get("/apis/test/user", [authjwt.verifyToken], controller.userBoard);

  // http://localhost:5000/apis/auth/admin
  app.get(
    "/apis/test/admin",
    [authjwt.verifyToken, authjwt.isAdmin],
    controller.adminBoard
  );

  // http://localhost:5000/apis/auth/mod
  app.get(
    "/apis/test/mod",
    [authjwt.verifyToken, authjwt.isModerator],
    controller.moderatorBoard
  );
};
