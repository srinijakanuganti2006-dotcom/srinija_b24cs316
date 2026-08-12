import fs from 'fs';
fs.start("nextTick.js", function(){
    console.log("nextTick.js Exists");
});
setImmediate(function(){
    console.log("Immediate Timer 1 Executed");
});
setImmediate(function(){
    console.log("Immediate Timer 2 Executed");
});
process.nextTick(function(){
    console.log("Next Tick 1 Executed");
});
process.nextTick(function(){
    console.log("Next Tick 2 Executed");
});