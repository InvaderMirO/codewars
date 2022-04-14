function solution(str){
    let reversed = "";                              // setup 'reversed' variable to hold string
    for (var i = str.length - 1; i >= 0; i--){      // loop thru string backwards
      reversed += str[i];                           // on each loop interation. add the last value from the array 'str' to the start of 'reversed'
    }     
    return reversed;                                // return the looped results
}