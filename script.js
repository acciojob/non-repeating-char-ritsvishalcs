function firstNonRepeatedChar(str) {
  const charCount = {};

    // Step 1: Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Return the first character that has a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Step 3: If no unique character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
