const express = require("express");
const {
    getAllUsers,
    getUserById,
    removeUser,
    addUser,
    setUserNickname,
    uploadFile,
    downloadFile
} = require("./userController");
const router = express.Router();

router.get("/user/:id", getUserById);
router.delete("/user/:id", removeUser);
router.post("/user", addUser);
router.get("/", getAllUsers);
router.post("/user", setUserNickname);
router.post("/upload/:description", uploadFile);
router.get("/download/:fileName", downloadFile);

module.exports = router;