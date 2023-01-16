const db = require("../models");
const config = require("../configs/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op; //Operator ตัวดำเนินการในฐานข้อมูล
const jwt = require("jsonwebtoken"); //json
const bcrypt = require("bcryptjs"); //ใส่รหัส

exports.signup = (req, res) => {
  //Insert User to database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        // Select * from roles where name = req.body.roles
        Role.findAll({
          //เช็คค่าที่ส่งมาว่าถูกต้องไหม
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            //คำสั่งในการ set user
            res.send({ message: "User was registered successfully" });
          });
        });
      }
      //ไม่ได้กำหนด
      else {
        //user role = 1
        user.setRoles([1]).then(() => {
          //คำสั่งในการ set user
          res.send({ message: "User was registered successfully" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  // Select * from user where username = req.body.username
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not Found." });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res
          .status(404)
          .send({ accessToken: null, message: "Invalid Password!" });
      }
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours 24*60*60
      });

      let authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
