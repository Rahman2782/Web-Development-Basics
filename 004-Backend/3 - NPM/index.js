//var generateName = require('sillyname'); - COMMONJS

import generateName from "sillyname"; //using ECMAscript (easier)
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

import superheroes from "superheroes"; 

const name = superheroes.random(); // The correct method for a random superhero
console.log(`I am ${name}!`);
