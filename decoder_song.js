function songDecoder(song){
    // ...
    let arrayy = song.split("WUB");
  
    console.log(arrayy);
  
    for(let i=0; i<arrayy.length; i++){
        if(arrayy[i] === ""){
            arrayy.splice(i, 1)
            i--
        }
      }
      console.log(arrayy);
      let newString = arrayy.join(" ");
      console.log(newString);
      return newString;
  
  }
  
  songDecoder("AWUBBWUBC");
  songDecoder("AWUBWUBWUBBWUBWUBWUBC");
  songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");
  
  
  