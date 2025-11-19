const socket = new WebSocket("ws://localhost:8080");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messagesDiv = document.getElementById("messages");

socket.addEventListener("open", () => {
  console.log("Connected to server");
});

socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
  const p = document.createElement("p");
  p.textContent = "Server: " + event.data;
  messagesDiv.appendChild(p);
});

sendBtn.addEventListener("click", () => {
  const message = messageInput.value;
  if (message.trim()) {
    socket.send(message);
    const p = document.createElement("p");
    p.textContent = "You: " + message;
    messagesDiv.appendChild(p);
    messageInput.value = "";
  }
});
