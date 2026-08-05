const EventEmitter =require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("login",() => {
    console.log("Checking Username...");
});
eventEmitter.on("login",() => {
    console.log("Checking Password...");
});
eventEmitter.on("login",() => {
    console.log("Login Successful");
});
eventEmitter.emit("login");