function multiply(number){
    if(number == 0){                        // starts with check if number is zero
      return number*(5**0)
    }else if (number < 10 && number > -10){
      return number*(5**1)                  // continues to expand range as digits increase
    }else if (number < 100 && number >= -100){
      return number*(5**2)
    }else if (number < 1000 && number >= -1000){
      return number*(5**3)
    }else if (number < 10000 && number >= -10000){
      return number*(5**4)
    }else if (number < 100000 && number >= -100000){
      return number*(5**5)
    }else if (number < 1000000 && number >= -1000000){
      return number*(5**6)
    }else if (number < 10000000 && number >= -10000000){
      return number*(5**7)
    }else if (number < 100000000 && number >= -100000000){
      return number*(5**8)
    }else if (number < 1000000000 && number >= -1000000000){
      return number*(5**9)
    }
  }