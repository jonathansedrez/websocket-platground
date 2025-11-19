import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.send("Welcome!");
  ws.on("message", (msg) => {
    for (const client of wss.clients) {
      if (client.readyState === 1) {
        client.send(msg.toString());
      }
    }
  });
});
