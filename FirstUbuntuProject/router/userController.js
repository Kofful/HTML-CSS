const multer = require("multer");
const path = require("path");
const users = [
    {
        id: 1,
        userName: "Alexander",
        userLastName: "Shevchenko",
        userNickname: "Monstr21312",
        password: "12345678",
        album: []
    },
    {
        id: 2,
        userName: "Ivan",
        userLastName: "Ivanov",
        userNickname: "Liquidator423",
        password: "12341234",
        album: []
    },
    {
        id: 3,
        userName: "Konstantin",
        userLastName: "Karpenko",
        userNickname: "BugHunter31231",
        password: "passw0rd",
        album: []
    }
];

module.exports.getAllUsers = function (req, res) {
    res.json(users);
};

module.exports.getUserById = function (req, res) {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            res.json(users[i]);
            return;
        }
    }
    res.send("user not found");
};

module.exports.removeUser = function (req, res) {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
            res.json(users);
            return;
        }
    }
    res.send("user not found");
};

module.exports.addUser = function (req, res) {
    users.push(req.body);
    res.send(users);
};

module.exports.setUserNickname = function (req, res) {
    const id = parseInt(req.body.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].nickname = req.body.nickname;
            res.json(users);
            return;
        }
    }
    res.send("user not found");
};

module.exports.uploadFile = function (req, res, next) {
    const timestamp = new Date().getTime();
    console.log(req.body);
    const storage = multer.diskStorage({
        destination: "./public/avatars/",
        filename: (req, file, cb) => {
            if (file.mimetype.toString().indexOf("image") === -1) {
                res.send("INVALID_DATA");
                return;
            }
            const img = {
                comments: [],
                id: parseInt(req.body.id),
                description: (req.params.description),
                fileName: file.originalname
            };
            const userId = parseInt(req.body.userId);
            console.log(req.body, userId);
            for (let i = 0; i < users.length; i++) {
                if (users[i].id === userId) {
                    users[i].album.push(img);
                    break;
                }
            }
            cb(null, timestamp.toString() + "-" + file.originalname);
        }
    });
    const upload = multer({storage: storage}).any();
    upload(req, res, (err) => {
        if (err) {
            return next(err);
        }
        res.send("Success");
    });
};

module.exports.downloadFile = function (req, res) {
    const fileName = req.params.fileName;
    const publicPath = path.join(__dirname, "..", "public", "avatars", fileName);
    res.sendFile(publicPath);
};

function findPhoto(imageId, userId)
{
    let user;
    users.forEach(el => {
        if (el.id === userId) {
            user = el;
        }
    });
    user.album.forEach(el => {
        if (el.id === imageId) {
            return el;
        }
    });
}

module.exports.deleteFile = (req, res) => {
    const photo = findPhoto(parseInt(req.body.imageId), parseInt(req.body.userId));
    if(photo) {
        photo.parent.removeChild();
        res.send("Success");
    }
    else
    res.send("File not found");
};

module.exports.addComment = (req, res) => {
    const comment = {
        id: req.body.commentId,
        text: req.body.comment,
        commentatorId: req.body.commentatorId
    };
    const photo = findPhoto(parseInt(req.body.imageId), parseInt(req.body.userId));
    if(photo) {
        photo.parent.removeChild();
        res.send("Success");
    }
    if(photo) {
        photo.comments.push(comment);
    }
    else
    res.send("File not found");
};

function findComment(id, imageId, userId) {
    const photo = findPhoto(imageId, userId);
    photo.comments.forEach(el => {
        if (el.id === id) {
            return el;
        }
    });
}

module.exports.updateComment = (req, res) => {
    const newComment = {
        id: req.body.commentId,
        text: req.body.comment,
        commentatorId: req.body.commentatorId
    };
    let el = findComment(newComment.id, parseInt(req.body.imageId), parseInt(req.body.userId));
    if (el) {
        el = newComment;
        res.send("Success");
    }
    else
        res.send("Data not found");
};

module.exports.deleteComment = (req, res) => {
    const newComment = {
        id: req.body.commentId,
        text: req.body.comment,
        commentatorId: req.body.commentatorId
    };
    let el = findComment(newComment.id, parseInt(req.body.imageId), parseInt(req.body.userId));
    if (el) {
        el.parent.RemoveChild();
        res.send("Success");
    }
    else
        res.send("Data not found");
};