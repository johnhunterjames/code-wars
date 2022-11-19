//takes in a string, and returns the number of vowels as an integer.

function getCount(str) {
    let count = 0
    str.split('').forEach(element => {
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u'){
            count += 1
        }
    });
    return count
  }