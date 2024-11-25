const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// not recommended to concat the string like this.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//recommended to concat the string if require known as string interpolation.

const gameName = new String('hitesh-hc-com')
// the way to define the string data type which also return the output in obj type.

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

console.log(concat("sadasd","Asdsadsa","daddas"))