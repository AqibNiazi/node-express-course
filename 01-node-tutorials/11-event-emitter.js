const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("event", (name, id) => {
  console.log("Data received!   Name: " + name + ", ID: " + id);
});

customEmitter.on("event", () => {
  console.log("Another event occurred!");
});

customEmitter.emit("event", "John", 42);
