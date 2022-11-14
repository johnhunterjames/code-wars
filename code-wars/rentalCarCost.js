//takes in the integer of days that you are renting a car, then calculates discounts according to how long it would be rented.

function rentalCarCost(d) {
    if (d >= 7){
        return (d * 40) - 50
    }
    else if (d >= 3){
        return (d * 40) - 20
    }
    else {
        return d * 40
    }
  }