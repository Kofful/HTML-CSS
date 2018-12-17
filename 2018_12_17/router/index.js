const express = require("express");
const userController = require("./userController");

const router = express.Router();

router.post("/user", userController.createUser);
router.put("/user", userController.updateUser);
router.get("/user/:id", userController.findById);
router.post("/login". userController.login)

module.exports = router;