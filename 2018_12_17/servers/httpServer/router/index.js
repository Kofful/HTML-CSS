const express = require("express");
const userController = require("./userController");
const authMiddleware = require("../../../utils/authMiddleware");
const conversationController = require("./conversationController");

const router = express.Router();

router.post("/user", userController.createUser);
router.put("/user", userController.updateUser);
router.get("/user/:id", authMiddleware, userController.findById);
router.post("/login", userController.login);

router.get("/conversation", authMiddleware, conversationController.getAllConversations);
router.get("/conversation/:id", authMiddleware, conversationController.getConversationById);
router.post("/conversation/:recipient", authMiddleware, conversationController.createConversation);
module.exports = router;