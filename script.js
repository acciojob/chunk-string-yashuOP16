function stringChop(str, size) {
	if(str == null) return [];

	size = Number(size);

	let result = [];
	let temp = '';

	for(let i = 0; i < str.length; i++){
		temp += str[i]

		if(temp.length === size){
			result.push(temp);
			temp = '' ; 
		}
	}

	if(temp !== ){
		result.push(temp)
	}

	return result;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
