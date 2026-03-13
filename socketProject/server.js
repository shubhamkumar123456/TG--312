const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    method: ["post", "get"],
  },
});
const port = 3000;

let users = {};

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join", (username) => {
    console.log(username);
    users[socket.id] = username;
    console.log(users);

    io.emit("message", { type: "System", msg: `new user ${username} joined` });
  });

  socket.on("sendMessage", (msg) => {
    io.emit("message", { type: users[socket.id], msg: msg });
  });
});

// let users1={
//     '123':'one',
//     '234':'two',
//     '888':'john'

// }

// console.log(users1['234'])  //two

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
