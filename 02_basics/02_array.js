const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operation

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// used for the nested arrays infinity will automatically applied for the last nested array or we can paas the manually to flate the array.
console.log(real_another_array);


console.log(Array.from(real_another_array,(x) => x + x))
console.log(Array.isArray(["Hitesh"]))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting
// we need to specify the key of the object from which we need to create array otherwise it will return empty array for object.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))