// Script 1
console.log("*** Script 1 - Строка n раз ***");
let transferString = (n, string) => {
    for(let i=0; i<n; i++){
        console.log(string);
    }
}

transferString(7, "PHP Storm");

// Script 2
console.log("\n*** Script 2 - Гласная или нет ***");
let isVowel = (letter) => {
    letter = letter.toLowerCase();
    return letter === "a" || letter === "e" || letter === "u" || letter === "i" || letter === "o";
}

console.log(isVowel("A"));
console.log(isVowel("b"));

// Script 3
console.log("\n*** Script 3 - Палиндром ***");
let isPalindrome = (string) => {
    if(typeof string !== "string"){
        console.log("Not a word!");
        return false;
    }

    string = string.replace(" ", "");
    let part1;
    let part2;
    if(string.length % 2 === 0){
        part1 = string.slice(0, string.length/2);
        part2 = string.slice(string.length/2, string.length);
    } else {
        let half = string.length/2;
        part1 = string.slice(0, half-0.5);
        part2 = string.slice(half+0.5, string.length);
    }

    part2 = part2.split("");
    part2.reverse();
    part2 = part2.join("");
    return part1 === part2;
}

console.log("Odd quantity \"sabhbas\": " + isPalindrome("sabhbas"));
console.log("Even quantity \"haah\": " + isPalindrome("haah"));
console.log("Odd quantity \"sabhas\": " + isPalindrome("sabhas"));
console.log("Even quantity \"habh\": " + isPalindrome("habh"));
