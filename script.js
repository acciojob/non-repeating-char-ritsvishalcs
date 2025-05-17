function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {}
	for(let char of str){
		charCount[char] = (charCount[char] || 0) + 1;
	}
	for(let count of charCount){
		if(count === 1){
			return count
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
