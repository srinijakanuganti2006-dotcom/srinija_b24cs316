function greet(name, age)
{
    console.log(`Name: ${name}, Age: ${age}`);
}
setTimeout(greet, 3000, "Alice", 25);