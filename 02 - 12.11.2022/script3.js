let firstFlyYear = 1961;
let startYear = 1800;
let endYear = 2020;

let countFirstFlyYear = 0;
let countLeapYears = 0;

for(let i=startYear; i<endYear; i++){
    countFirstFlyYear++;
    if(i==firstFlyYear){
        break;
    }
}
console.log(countFirstFlyYear);

for(let i=startYear; i<endYear; i+=4){
    countLeapYears++;
}
console.log(countLeapYears);
