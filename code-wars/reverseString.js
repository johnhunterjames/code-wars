//Complete the solution so that it reverses the string passed into it.

function solution(str){
  let splitstr = str.split('')
  let reverse = splitstr.reverse()
  return reverse.join('')
}