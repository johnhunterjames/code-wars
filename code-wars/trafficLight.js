//takes in the color of the light, and returns the light that is about to show.

function updateLight(current) {
    if (current === "green"){
      return "yellow"
    }
    else if (current === "yellow"){
      return "red"
    }
    else if(current === "red"){
      return "green"
    }
    else{return "Not a valid input"}
}