const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { default: helmet } = require("helmet");
const compression = require("compression");
require("dotenv").config();

let app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
require("./db/init.db");
app.use("", require("./routes/index"));
app.listen(8000, () => {
  console.log("Server is running in port 8000");
});

io.on("connection", (socket) => {
  //console.log('a user connected', socket.id);
  socket.on("comment", (msg) => {
    // console.log('new comment received', msg);
    io.emit("new-comment", msg);
  });
});
exports.io = io;

//gui emit nhan on
// tu tao id rieng khi io.on
// socket join(id phong)
