const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.once("Start",() =>{
    console.log("Application started");
});
eventEmitter.emit("start");
eventEmitter.emit("start");