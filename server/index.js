import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.send("Welcome!");
  ws.on("message", (msg) => ws.send("Echo: " + msg));
});
