const socketio = require('socket.io');
let io;
const { CONNECTION, SUBSCRIBE, UNSUBSCRIBE, NEW_MESSAGE, MESSAGE_ADDED, DISCONNECT } = require('./constants');

exports.listen = function (server) {
    io = socketio.listen(server);
    io.sockets.on(CONNECTION, function (socket) {

        socket.on(SUBSCRIBE, (cid) => {
            socket.join(cid);
        });

        socket.on(UNSUBSCRIBE, (cid) => {
            socket.leave(cid);
        });

        socket.on(NEW_MESSAGE, (data) => {
            const {cid, message} = data;
            io.sockets.in(cid).emit(MESSAGE_ADDED, message);
        });

        socket.on(DISCONNECT, () => {
            console.log('user disconnected');
        });
    });
};
