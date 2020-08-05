function duplicateEncode(word){
    // ...
    let lowered = word.toLowerCase(); 
    let wordArr = lowered.split(""); 


    let filteredArray = []; 
        for(let i=0; i<wordArr.length; i++)
        {
            if(wordArr.indexOf(wordArr[i]) === i){
                filteredArray.push("(")
            }
            else {
                filteredArray.push(")");
            }
        }
        console.log(filteredArray);
        return filteredArray;

    
}



duplicateEncode("din"); "((("
duplicateEncode("recede"); "()()()"
duplicateEncode("Success"); ")("