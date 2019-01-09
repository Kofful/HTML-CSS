const http = require("http");
const app = require("./servers/httpServer/");
const socketServer = require("./servers/socketServer/");

const httpServer = http.createServer(app);

socketServer.listen(httpServer);

httpServer.listen(3000, () => console.log("~Server is working"));