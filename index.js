const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const farmAnimals = {cow:'moo', horse:'neigh', sheep:'baa', pig:'oink', chicken:'clurks'};
const {cow, horse, sheep, pig, chicken} = farmAnimals;
console.log(cow, horse, sheep, pig, chicken);
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let farmAnimalsNames = { cow:'Bessie', sheep:'Dolly', pig:'Babe',chicken:'Little'};
let { cow, sheep, pig,chicken} =farmAnimalsNames;
console.log(cow, sheep, pig, chicken);
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let farmAnimalsColor = {cow:'BlackAndWhite', sheep:'Black',pig:'Pink'};
let {cow, sheep, pig} = farmAnimalsColor;
console.log(cow, sheep, pig);
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const rainbowColors = ["red","orange","yellow","green","blue","indigo","violet"];
const[red,orange,yellow,green,blue,indigo,violet] = rainbowColors;
console.log(rainbowColors);
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let rainbowColors = ["red","orange","yellow","green","blue","violet"];
let [r, o, y, g, b, v] = rainbowColors;
console.log(r, o, y, g, b, v);
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const rainbowColors = ["red","orange","yellow","green","blue","indigo","violet"];
const [ , , , , , indg] = rainbowColors;
console.log(indg);
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
let muppet ={ muppetName:"Miss Piggy",
              color:"pink",
              song: "Never Before, Never Again",
              job:"Cast member of The Muppet Show",
              partner: "Kermit"
};
let {muppetName,color,song,job,partner}= muppet;
console.log(muppetName,color,song,job,partner);
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
let muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  songs: ["Never Before, Never Again", "Rainbow Connection", "Moving Right Along", "I Hope That Somethin' Better Comes Along"],
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};
let {songs,job,partner} = muppet;
console.log(songs[1],songs[3],job,partner);
