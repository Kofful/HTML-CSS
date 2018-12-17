const express = require("express");
const {
    getAllUsers,
    getUserById,
    removeUser,
    addUser,
    setUserNickname,
    uploadFile,
    downloadFile,
    deleteFile,
    addComment,
    updateComment,
    deleteComment
} = require("./userController");

const {
    validateParams,
    validateUser,
    validateFileName
} = require("../utils/validationMiddleware");

const router = express.Router();

router.get("/user/:id", validateParams, getUserById);
router.delete("/user/:id", validateParams, removeUser);
router.post("/user", validateUser, addUser);
router.get("/", getAllUsers);
router.post("/user/:id", validateParams, validateUser, setUserNickname);

router.post("/upload/:description", uploadFile);
router.get("/download/:fileName", validateFileName, downloadFile);
router.post("/delete-file", deleteFile);

router.post("/add-comment", addComment);
router.post("/update-comment", updateComment);
router.post("/delete-comment", deleteComment);

module.exports = router;