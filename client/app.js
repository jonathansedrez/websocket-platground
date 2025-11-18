const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", () => {
  setTimeout(() => {
    socket.send("Hello, WebSocket Echo Server!");
  }, 4000);
});

socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
