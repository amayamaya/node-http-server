import http from "node:http";
import app from "./lib/app.js";

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";
// Directs host to localhost if no host is specified

server.listen(PORT, HOST, () => {
  // added host to listen argument
  console.log(server.address());
});
