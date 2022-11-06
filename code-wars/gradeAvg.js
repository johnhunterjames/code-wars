//Function takes in three integers, averages them out and gives a grade average back in the form of a letter grade.

function getGrade (s1, s2, s3) {
  const gradeAvg = (s1 + s2 + s3)/3

  if(gradeAvg >= 90 && gradeAvg <= 100){
    return('A')
  }
  else if(gradeAvg >= 80 && gradeAvg < 90){
      return('B')
  }
  else if(gradeAvg >= 70 && gradeAvg < 80){
    return('C')
  }
  else if(gradeAvg >= 60 && gradeAvg < 70){
    return('D')
  }
  else{
    return('F')
  }

}