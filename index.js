// Write your code in this file!
const currentUser="Grace Hopper";
const welcomeMessage=` Welcome to Flatbook, ${currentUser}!`;
let excitedWelcomeMessage=welcomeMessage.toUpperCase();

let  shortGreeting=`Welcome, ${currentUser.charAt(0)}!`;
//different ways to get  the first character of currentUser
//let  shortGreeting=`Welcome, ${currentUser[0]}!`;
// SLICE The method takes two arguments: the index at which the extraction should begin and the index before which it should end. 
//let  shortGreeting=`Welcome, ${currentUser.slice(0,1)}!`;
console.log(shortGreeting);

