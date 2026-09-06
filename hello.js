function name(n){
    if(n %3 ===1){
        console.log("fizz")
    }
    if(n %5 ===0){
        console.log("buzz")
    }
    else{
        console.log("fizz buzz")
    }
    return n;
}
console.log(name(234))
console.log(name(34))
console.log(name(24))
console.log(name(22))