const users=[
    {
        id: 1,
        nickname: "Monstr21312",
    },
    {
        id:2,
        nickname:"Liquidator423",
    },
    {
        id:3,
        nickname:"BugHunter31231",
    }
];

module.exports.getAllUsers=function(req,res){
    res.json(users);
};

module.exports.getUserById=function(req,res){
    for(let i = 0;i < users.length;i++) {
        if(users[i].id===req.params.id) {
            res.json(users[i]);
            return;
        }
    }
};

module.exports.removeUser=function(req,res){
    for(let i = 0;i < users.length;i++) {
        if(users[i].id===req.params.id) {
            users.splice(req.params.id-1,1);
            res.json(users);
            return;
        }
    }
};

module.exports.addUser=function(req,res){
    users.push(req.body);
    res.json(users);
};

module.exports.setUserNickname=function(req,res){
    for(let i = 0;i < users.length;i++) {
        if(users[i].id===req.params.id) {
            users[i].nickname=req.params.nickname;
            res.json(users);
            return;
        }
    }
};