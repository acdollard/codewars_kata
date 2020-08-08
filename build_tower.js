function towerBuilder(nFloors) {
    // build here
    let stars = 1;
    let spacesOneSide = nFloors -1;
    let height = nFloors;
    let width = nFloors *2 -1; 
    
    let arr = []; 
    
    for (let i=0; i<height; i++) {
        let floor = " ".repeat(spacesOneSide) + "*".repeat(stars) + " ".repeat(spacesOneSide);
        arr.push(floor);
        stars += 2;
        spacesOneSide --;
      
    };
    return arr; 