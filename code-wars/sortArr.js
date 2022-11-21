//takes in an integer, and returns the descending order of the number(s)

function descendingOrder(n){
    let newArr = String(n)
    return Number(newArr.split('').sort((a,b) => { return b - a }).join(''))
  }