// WebSocket Playground - Main Application
console.log("App initialized");

const socket = new WebSocket("wss://echo.websocket.org");

socket.addEventListener("open", () => {
  setTimeout(() => {
    socket.send("Hello, WebSocket Echo Server!");
  }, 4000);
});

socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
