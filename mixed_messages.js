// Create arrays of words to be drawn on

let shots = ['drive', 'chip', 'putt']
let descriptors = ['crushed','hooked', 'pushed', 'pulled', 'drew']
let pronouns = ['Matt', 'Joel', 'Tyler', 'Brandon', 'I', 'You']
let identifiers = ['that']

const randomShots = Math.floor(Math.random() * shots.length);
const randomDescriptors = Math.floor(Math.random() * descriptors.length);
const randomPronouns = Math.floor(Math.random() * pronouns.length);
const randomIdentifiers = Math.floor(Math.random() * identifiers.length);

let message = pronouns[randomPronouns] + " " + descriptors[randomDescriptors] + " " + identifiers[randomIdentifiers] + " " +  shots[randomShots] 

console.log(message)