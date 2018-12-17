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

module.exports.deleteFile = (req, res) => {
    const id = parseInt(req.body.id);
    const userId = parseInt(req.body.userId);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            for (let j = 0; j < users[i].album; j++) {
                if (users[i].album[i].id === id) {
                    users[i].album.removeChild(users[i].album[i]);
                    res.send("Success");
                }
            }
            break;
        }
    }
    res.send("File not found");
};

module.exports.addComment = (req, res) => {
    const comment = {
        id: req.body.commentId,
        text: req.body.comment,
        commentatorId: req.body.commentatorId
    };
    const imageId = parseInt(req.body.id);
    const userId = parseInt(req.body.userId);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            for (let j = 0; j < users[i].album; j++) {
                if (users[i].album[i].id === imageId) {
                    users[i].album[i].comments.push(comment);
                    res.send("Success");
                }
            }
            break;
        }
    }
    res.send("File not found");
};

module.exports.updateComment = (req, res) => {
    const newComment = {
        id: req.body.commentId,
        text: req.body.comment,
        commentatorId: req.body.commentatorId
    };
    const imageId = parseInt(req.body.id);
    const userId = parseInt(req.body.userId);

    let user;
    let album;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            user = users[i];
        }
    }

    for (let i = 0; i < users[i].album.length; i++) {
        if (user.album[i].id === imageId) {
            album = user.album[i];
        }
    }

    for (let i = 0; i < album.length; i++) {
        if(album[i].id === newComment.id) {
            album[i] = newComment;
            res.send("Success");
        }
    }
    res.send("File not found");
};

module.exports.deleteComment = (req, res) => {
    const id = req.body.commentId;
    const imageId = parseInt(req.body.id);
    const userId = parseInt(req.body.userId);

    let user;
    let album;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            user = users[i];
        }
    }

    for (let i = 0; i < users[i].album.length; i++) {
        if (user.album[i].id === imageId) {
            album = user.album[i];
        }
    }

    for (let i = 0; i < album.length; i++) {
        if(album[i].id === id) {
            album.removeChild(album[i]);
            res.send("Success");
        }
    }
    res.send("File not found");
};