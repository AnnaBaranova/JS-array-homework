function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  const maxOfTree = function (x,y,z) {
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y
    } else {
      return z
    }
  }
  
  console.log (maxOfTree(10,9,11));
  
   function isCharAVowel (char) {
     formattedChar = char.toLowerCase();
     if (formattedChar === "a"||formattedChar === "e"||formattedChar === "i"||formattedChar === "o"||formattedChar === "u"){
       return true
     } else {
      return false 
     }
   }
   console.log (isCharAVowel("A"));
  
  let sumArray = function (arr){
    let sum = 0;
    arr.forEach(function(num) {
      sum+=num
    })
    return sum
   }
  
  console.log (sumArray([2,4,5]))
  
  function multiplyArray (arr) {
    let prod = 1;
    arr.forEach(function(num) {
      prod*=num
    })
    return prod
  }
  
  console.log (multiplyArray([2,4,5]))
  
  const numArgs = function (){
   return arguments.length;
  }
  console.log (numArgs(4,5,6,7,8,9))