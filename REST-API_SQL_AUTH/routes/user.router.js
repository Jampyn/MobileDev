const { authjwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //http://localhost:5000/apis/test/all
  app.get("/apis/test/all", controller.allAccess);

  //http://localhost:5000/apis/test/user
  app.get("/apis/test/user", [authjwt.verifyToken], controller.userBoard);

  //http://localhost:5000/apis/test/admin
  app.get(
    "/apis/test/admin",
    [authjwt.verifyToken, authjwt.isAdmin],
    controller.adminBoard
  );

  //http://localhost:5000/apis/test/mod
  app.get(
    "/apis/test/mod",
    [authjwt.verifyToken, authjwt.isModerator],
    controller.moderatorBoard
  );
};
