const { User } = require("../models");
const userData = [
  {
    name: "Rick",
    email: "rick@yahoo.com",
    password: "password",
  },
  {
    name: "Baer",
    email: "blanfried@yahoo.com",
    password: "password",
  },
  {
    name: "Baer 1",
    email: "blanfried@yahoo.com",
    password: " ",
  },
  {
    name: "Baer 2",
    email: "blanfried@yahoo.com",
    password: " ",
  },
  {
    name: "Baer 3",
    email: "blanfried@yahoo.com",
    password: " ",
  },
  {
    name: "Tony",
    email: "tony@yahoo.com",
    password: " ",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;