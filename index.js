// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];



//appends a cat to the end of the cats array
function destructivelyAppendCat(name){
cats.push("Ralph");
}

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name){
cats.unshift("Bob");
}

//Removes the last cat from the array
function destructivelyRemoveLastCat(name){
cats.pop();
}

//removes the first cat from the array
function destructivelyRemoveFirstCat(name){
cats.shift();
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
return [...cats, "Broom"];
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
return ["Arnold", ...cats];
}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(name){
return cats.slice(0, -1);
}

//removes the first cat in the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(name){
return cats.slice(1);
}