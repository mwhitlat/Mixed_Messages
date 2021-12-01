// Create arrays of words to be drawn on

let shots = ['drive', 'chip', 'putt']
let descriptors = ['crushed','hooked', 'pushed', 'pulled', 'drew', 'bladed', 'sliced']
let pronouns = ['Matt', 'Joel', 'Tyler', 'Brandon', 'I', 'You']
let identifiers = ['that']
let exclamations = ['Dang!', 'Wow!', 'Yikes,']
// Create random functions for each array

const randomShots = Math.floor(Math.random() * shots.length);
const randomDescriptors = Math.floor(Math.random() * descriptors.length);
const randomPronouns = Math.floor(Math.random() * pronouns.length);
const randomIdentifiers = Math.floor(Math.random() * identifiers.length);
const randomExclamations = Math.floor(Math.random() * exclamations.length);

// pull it all together in a message variable 
let message = `${exclamations[randomExclamations]} ${pronouns[randomPronouns]} ${descriptors[randomDescriptors]} ${identifiers[randomIdentifiers]} ${shots[randomShots]}.` 

// print the variable
console.log(message)