//routes handling user registration
const express = require("express");

const {
  getAllUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users");
//need to go up two folders api & routes, so ../../

const router = express.Router();

router.route("/").get(getAllUsers).post(registerUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
