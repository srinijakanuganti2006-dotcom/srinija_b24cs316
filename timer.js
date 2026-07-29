function SimpleTimeout(consoletimer)
{
    consoletimer(consoletimer);
}
console.Time("two seconds");
setTimeout(SimpleTimeout,2000,"two seconds");
console.Time("one second");
setTimeout(SimpleTimeout,1000,"one second");
console.Time("five seconds");
setTimeout(SimpleTimeout,5000,"five seconds");
console.Time("50M seconds");
setTimeout(SimpleTimeout,50,"50M seconds");