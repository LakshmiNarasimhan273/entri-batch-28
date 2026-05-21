// Interview problem solving patterns 
// Problems
// 1 - Reverse a String
// Input: Hello World
// Output: World Hello

// Output: dlroW olleH
function reverser(str){
    // return str.split(' ').reverse().join(' ');

    return str.split('').reverse().join('');
}

console.log(reverser("Hello World"));   


// 2 - Palindrome
// brush - hsurb , it's not a palindrome
// malayalam - malayalam | racecar - racecar , it's a palindrome
function palindrome(str){
    // return str === str.split('').reverse().join('');

    let reversedStr = str.split('').reverse().join('');

    if(str === reversedStr){
        return "It's a Palindrome";
    } else {
        return "It's Not a Palindrome";
    }
}

console.log(palindrome("brush"));


// 3 - Finding the duplicates in array
// Input: [2, 1, 2, 3, 4, 4]
// Output: [2, 4]
function duplicateElements(arr){
    let sortedArr = arr.sort();
    // [ 1, 2, 2, 3, 4, 4 ]
    let duplicateElements = [];

    for(let i = 0; i < sortedArr.length - 1; i++){
        if(sortedArr[i] === sortedArr[i + 1]){
            duplicateElements.push(sortedArr[i]);
        }
    }

    return duplicateElements;

}

console.log(duplicateElements([3, 2, 1, 2, 3, 4, 4]));