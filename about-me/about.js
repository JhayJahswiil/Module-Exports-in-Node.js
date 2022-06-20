// OBJECT about me
let aboutMe = {
    name: 'Ogbeide Jahswill',
    age: 16,
    address: 'Ado-Ekiti, Nigeria',
    isMarried: false
}

// getting the details of 'friend.js' file
let info = require('../about-my-friend/friend.js')

// a function that gets the value of both objects
function infoAboutMe(){
    return `
My name is ${aboutMe.name}, i am ${aboutMe.age} years old. 
I live in ${aboutMe.address} and my marital status is ${aboutMe.isMarried}. 
While my friend's name is ${info.name}, he is ${info.age} years old. 
He lives in ${info.address} and his marital status is ${info.isMarried}.
`
}

// exporting detials
module.exports.infoAboutMe = infoAboutMe;





// console.log(``);