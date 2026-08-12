function printTable(num){
    console.log(`Multiplication Table of ${num}`);
    for(let i=1;i<=10;i++){
        console.log(`${num} ${i}=${num*i}`);
    }
}
console.log("please wait...");
setTimeout(() => {
    printTable(5);
}, 2000);