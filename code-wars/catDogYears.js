//takes in the amount of human years you have had your cat and dog (you got them at the same time) and converts how old they are in cat and dog years.

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0
    let dogYears = 0

    for (let i = 1; i <= humanYears; i++){
        if(i === 1){
            catYears += 15
            dogYears += 15
        }
        else if(i === 2){
            catYears += 9
            dogYears += 9
        }
        else {
            catYears += 4
            dogYears += 5
        }
    }
    return([humanYears,catYears,dogYears])
  }

  