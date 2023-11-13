const express = require("express");

userController = require("../controller/users");

const router = express.Router();

router.get("/", userController.getAllUser);

router.post("/", userController.createUser);

router.patch("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
