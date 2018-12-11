const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    removeUser,
    addUser,
    setUserNickname
}=require("./userController");

router.get("/user/:id",getUserById);

module.exports=router;