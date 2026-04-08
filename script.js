function chunkString(str, size) {
    if (!str) return [];

    let result = [];
    
    str.split('').reduce((acc, char, index) => {
        let chunkIndex = Math.floor(index / size);

        acc[chunkIndex] = (acc[chunkIndex] || '') + char;

        return acc;
    }, result);

    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
