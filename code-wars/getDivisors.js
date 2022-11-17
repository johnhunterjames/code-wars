//takes in an integer, then returns the total number of divisors.

function getDivisorsCnt(n){
    let divNum = 0
    for (let i = 0; i <= n; i++){
        if (n % i === 0){
            divNum += 1
        }
    }
    return divNum
}