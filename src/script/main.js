

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocation = true;
let i = 0; 
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k];

    if (currentLocation[0] > 2) {
        invalidLocation = true;
        console.log("This location is invalid")
        i++
    }

}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${i} invalid locations`)