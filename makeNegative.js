function makeNegative(num) {
    // Code?
    let string = JSON.stringify(num);
    let arr = string.split("");
    if(arr[0] === "-") {
    return num
    }
    else{
        arr.unshift("-");
        let str = arr.join("");
        let result = JSON.parse(str);
        return result

    }    
  }

  makeNegative(-5);