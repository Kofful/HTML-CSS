const express = require("express");
const userController = require("./userController");
const authMiddleware= require("../utils/authMiddleware");

const router = express.Router();

router.post("/user", userController.createUser);
router.put("/user", userController.updateUser);
router.get("/user/:id", authMiddleware, userController.findById);
router.post("/login". userController.login);

module.exports = router;