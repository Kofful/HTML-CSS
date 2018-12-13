const multer = require("multer");
const path = require("path");
const users = [
    {
        id: 1,
        nickname: "Monstr21312",
        album: []
    },
    {
        id: 2,
        nickname: "Liquidator423",
        album: []
    },
    {
        id: 3,
        nickname: "BugHunter31231",
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
    res.json("user not found");
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
    res.json("user not found");
};

module.exports.addUser = function (req, res) {
    users.push(req.body);
    res.json(users);
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
    res.json("user not found");
};

module.exports.uploadFile = function (req, res, next ) {
  const timestamp = new Date().getTime();
  const storage = multer.diskStorage( {
      destination: "./public/avatars/",
      filename: (req, file, cb) => {
          if(file.mimetype.toString().indexOf("image") === -1) {
              res.send("INVALID_DATA");
              return;
          }
          const img = {
              comments: {}
          };
          img.path = path;
          img.description = req.params.description;
          users[0].album.push(img);
          cb(null, timestamp.toString() + "-" + file.originalname);
      }
  });
  const upload = multer( {storage: storage }).any();
  upload(req, res, (err) => {
     if(err) {
         return next(err);
     }
     res.send("Success");
  });
};

module.exports.downloadFile = function (req, res, next ) {
    const fileName = req.params.fileName;
    const publicPath = path.join(__dirname, "..", "public", "avatars", fileName);
    res.sendFile(publicPath);
};