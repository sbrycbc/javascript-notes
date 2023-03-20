const math = Math.max(1, 2, 3, 4, 10, 7);
console.log(math, "e", 2, "bla", false,6);

console.log();

const showName = (title, age,...names) => {
    console.log("title:", title);
    console.log("age:", 55)
    console.log("names:");

    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }
}

showName("Caesar", 55 , "Gaius", "Julius");