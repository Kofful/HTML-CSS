const express = require("express");
const userController = require("./userController");
const authMiddleware = require("../../../utils/authMiddleware");
const conversationController = require("./conversationController");

const {
    validateUserPassword,
    validateUserNickname,
    validateUser,
    validateRecipient,
    validateFileName,
} = require("../../../utils/validationMiddleware");

const router = express.Router();

router.post("/user", validateUser, validateUserNickname, validateUserPassword, userController.createUser);
router.put("/user", userController.updateUser);
router.get("/user/:userNickname", userController.findByNickname);
router.post("/login", userController.login);

router.get("/conversation", authMiddleware, conversationController.getAllConversations);
router.get("/conversation/:id", authMiddleware, conversationController.getConversationById);
router.post("/conversation/:recipient", validateRecipient, authMiddleware, conversationController.createConversation);

module.exports = router;