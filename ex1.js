let city;
const defaultCity = "New York";

let myCity = city || defaultCity;
console.log(myCity);

console.log("___");

myCity = city || console.log("Fill in city please") || defaultCity;
console.log(myCity);

console.log("___");

city = "Los Angeles";

myCity = city || defaultCity;
console.log(myCity);

console.log("___");

let a = "3";
let b = 0;

console.log(31 % 5);

// vraca prvi true ili poslednji false
console.log("" || 0 || null || undefined || (NaN && false));

// vraca prvi false ili poslednji true
console.log(4 && true && "ds" && 1);
