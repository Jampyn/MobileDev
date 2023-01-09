module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "restaurants",
  dialect:"mysql",
  pool:{          //ตัวที่เข้ามา connect ใน database
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  }
};
