const multer = require("multer");
const path = require("path");
const {DATA_NOT_FOUND, INVALID_PARAMS} = require("../utils/constants");

const users = [
    {
        id: 1,
        userName: "Alexander",
        userLastName: "Shevchenko",
        userNickname: "Monstr21312",
        password: "12345678",
        album: [
            {
                "comments": [
                    {
                        "id": 1,
                        "text": "What does it mean?",
                        "commentatorId": "2"
                    }
                    ],
                "id": 1,
                "description": "",
                "fileName": "ado-net.jpg"
            }
        ]
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

module.exports.getUserById = function (req, res, next) {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            res.json(users[i]);
            return;
        }
    }
    return next(DATA_NOT_FOUND);
};

module.exports.removeUser = function (req, res ,next) {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
            res.json(users);
            return;
        }
    }
    return next(DATA_NOT_FOUND);
};

module.exports.addUser = function (req, res) {
    users.push(req.body);
    res.send(users);
};

module.exports.setUserNickname = function (req, res, next) {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].userNickname = req.body.userNickname;
            res.json(users);
            return;
        }
    }
    return next(DATA_NOT_FOUND);
};

module.exports.uploadFile = function (req, res, next) {
    const timestamp = new Date().getTime();
    const storage = multer.diskStorage({
        destination: "./public/avatars/",
        filename: (req, file, cb) => {
            if (file.mimetype.toString().indexOf("image") === -1) {
                return next(INVALID_PARAMS);
            }
            const img = {
                comments: [],
                id: 1,
                description: (req.query.description),
                fileName: file.originalname
            };
            const userId = parseInt(req.query.userId);
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
    let result;
    user.album.forEach(el => {
        if (el.id === imageId) {
            result = el;
        }
    });
    result.photoIndex = user.album.indexOf(result);
    result.userIndex = users.indexOf(user);
    return result;
}

module.exports.deleteFile = (req, res, next) => {
    const { userIndex, photoIndex, ...photo} = findPhoto(parseInt(req.body.imageId), parseInt(req.body.userId));
    if(photo) {
        users[userIndex].album.splice(photoIndex, 1);
        res.send("Success");
    }
    else {
        return next(DATA_NOT_FOUND);
    }
};

module.exports.addComment = (req, res, next) => {
    const comment = {
        id: 1,
        text: req.body.comment,
        commentatorId: req.body.commentatorId
    };
    const { userIndex, photoIndex, ...photo} = findPhoto(parseInt(req.body.imageId), parseInt(req.body.userId));
    if(photo) {
        users[userIndex].album[photoIndex].comments.push(comment);
        res.send("success");
    }
    else {
        return next(DATA_NOT_FOUND);
    }
};

function findComment(id, imageId, userId) {
    const photo = findPhoto(imageId, userId);
    let result;
    photo.comments.forEach(el => {
        if (el.id === id) {
            result = el;
        }
    });
    result.commentIndex = photo.comments.indexOf(result);
    result.userIndex = photo.userIndex;
    result.photoIndex = photo.photoIndex;
    return result;
}

module.exports.updateComment = (req, res, next) => {
    const { commentId, comment } = req.body;
    const { commentIndex, userIndex, photoIndex, ...el } = findComment(parseInt(commentId), parseInt(req.body.imageId), parseInt(req.body.userId));
    if (el) {
        users[userIndex].album[photoIndex].comments[commentIndex] = comment;
        res.send("Success");
    }
    else {
        return next(DATA_NOT_FOUND);
    }
};

module.exports.deleteComment = (req, res, next) => {
    const { commentId } = req.body;
    const { commentIndex, userIndex, photoIndex, ...el } = findComment(parseInt(commentId), parseInt(req.body.imageId), parseInt(req.body.userId));
    if (el) {
        users[userIndex].album[photoIndex].comments.splice(commentIndex, 1);
        res.send("Success");
    }
    else {
        return next(DATA_NOT_FOUND);
    }
};