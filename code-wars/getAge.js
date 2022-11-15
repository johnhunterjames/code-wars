//takes in a string, and grabs the first character and interprets it as an age (between 0-9)

function getAge(inputString){
    let splitString = inputString.split('')
    return Number(splitString[0])
    }