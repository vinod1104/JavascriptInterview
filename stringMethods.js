// All string methods produces a new string without altering the original string.


//To Return the character at the specified index - charAt(pos: number)
let _string1 = 'abMethods';'012345678'
console.log(_string1.charAt(2)) //Output: M

//To return the lenghth of string
console.log(_string1.length) //Output: 9

// To Returns the Unicode value of the character at the specified location - charCodeAt(index: number)
console.log(_string1.charCodeAt(0));//Output: 97

//To returns a non-negative integer that is the Unicode code point value of the character at the specified index in a string. 
//Unicode code points are the numerical values that represent each character in the Unicode standard - codePointAt(pos: number):
let _string2 = "𠮷";
console.log(_string2.codePointAt(0));//Output: 134071


// The strings to append to the end of the string.
// Returns a string that contains the concatenation of two or more strings - String.concat(...strings: string[])
console.log(_string1.concat(" for strings interview practice"));//output: abMethods for strings interview practice

// Returns true if the sequence of elements of searchString converted to a String is the same as 
//  the corresponding elements of this object(converted to a String) starting at endPosition – length(this). 
// Otherwise returns false.- endsWith(searchString: string, endPosition?: number | undefined)
console.log(_string1.endsWith('s',4)) // output: false // it will search s at index 4.
console.log(_string1.endsWith('a')) // output: false
console.log(_string1.endsWith('s')) // output: true

//Returns true if searchString appears as a substring of the result of converting this object to a String, 
    //at one or more positions that are greater than or equal to position; otherwise, returns false. 
    // - includes(searchString: string, position ?: number)
console.log(_string1.includes('a', 5)) //Output: false
console.log(_string1.includes('a')) //Output: true

//Returns the position of the first occurrence of a substring and if the given charcter is not in string , it will return -1
// indexOf(searchString: string, position?: number | undefined)
console.log(_string1.indexOf('a',8))//Output: -1 // in this i said that 'a' shoudl be their at 8 position.
console.log(_string1.indexOf('a'))//Output: 0
console.log(_string1.indexOf('s'))//Output: 8
console.log(_string1.indexOf('p'))//Output: -1

//Returns the last occurrence of a substring in the string.
// lastIndexOf(searchString: string, position?: number)
let _string3 ="MadamSonia"
console.log(_string3.lastIndexOf('a')) //Output:9
console.log(_string3.lastIndexOf('a',8)) //Output:3 // Because i have given that 8 , so it will take only 8 characters of the given string and will print lastindex of the given search aparam

//Determines whether two strings are equivalent in the current or specified locale
let _string4 = "MadamSonia"
console.log(_string3.localeCompare(_string4))//Output:0;
console.log(_string3.localeCompare(_string2))//Output:-1;

// Matches a string or an object that supports being matched against, 
// and returns an array containing the results of that search, 
// or null if no matches are found.
console.log(_string3.match(/a/)) //Output:[ 'a', index: 1, input: 'MadamSonia', groups: undefined ]
console.log(_string3.match(/a/g)) //Output:[ 'a', 'a', 'a' ]// g global flas - it will search in all the string

//method returns an iterator object which allows you to iterate over all matches in the string. Each iteration yields a match result object. 
//This object contains information about the match, including the full matched substring and any captured groups.
let macthed = _string3.matchAll(/[a-zA-Z]+/g);
for (const match of macthed) {
  console.log(match[0]); // Output: "MadamSonia"
}

//Normalization is particularly useful when comparing or processing strings that may contain different representations of the same characters, 
//such as accented characters or ligatures.
// It helps ensure consistency and compatibility across different environments
let _string5 = "café"
console.log(_string5.normalize("NFC"))
console.log(_string5.normalize("NFD"))
console.log(_string5.normalize("NFKC"))
console.log(_string5.normalize("NFKD"))

//is used to pad the end of a string with a specified string until the resulting string reaches a given length. 
//This method is useful for formatting strings to a certain width, especially in situations where alignment is important.
console.log(_string1.padEnd(20, "?"))// Output: "abMethods???????????"


//is used to pad the start of a string with a specified string until the resulting string reaches a given length. 
//This method is useful for formatting strings to a certain width, especially in situations where alignment is important.
console.log(_string1.padStart(20, "?"))// Output: "???????????abMethods"


//Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
console.log(_string1.repeat(5))// Output: "abMethodsabMethodsabMethodsabMethodsabMethods";

//Replaces text in a string, using a regular expression or search string
console.log(_string3.replace(/M/, '?')) //output:?adamSonia

//Finds the first substring match in a regular expression search.
console.log(_string3.search(/a/))//output:1

//is used to extract a section of a string and return it as a new string, without modifying the original string
console.log(_string3.slice(1)) //Output:adamSonia
console.log(_string3.slice(2, 5)) //Output:dam
console.log(_string3.slice(2,-2)) //Output:damSon

//Split a string into substrings using the specified separator and return them as an array.
console.log(_string3.split('a')) //Output:[ 'M', 'd', 'mSoni', '' ]

//Returns true if the sequence of elements of searchString converted to a String is 
//the same as the corresponding elements of this object (converted to a String) starting at position. 
//Otherwise returns false
console.log(_string3.startsWith('a'))//Output:false
console.log(_string1.startsWith('a'))//Output:true

//Returns the substring at the specified location within a String object
console.log(_string3.substring(1, 6))//Output:adamS
console.log(_string1.substring(0, 2))//Output:ab

//Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
console.log(_string3.toLocaleLowerCase()) //Output:madamsonia
console.log(_string1.toLocaleLowerCase()) //Output:abmethods


//Converts all alphabetic characters to uppercase, taking into account the host environment's current locale.
console.log(_string1.toLocaleUpperCase()); //Output:ABMETHODS
console.log(_string3.toLocaleUpperCase()); //Output:MADAMSONIA

//Converts all the alphabetic characters in a string to lowercase.
console.log(_string1.toLowerCase()) //Output:abmethods

//Converts all the alphabetic characters in a string to uppercase.
console.log(_string1.toUpperCase()) //Output:ABMETHODS

//Removes the leading and trailing white space and line terminator characters from a string.
let _string6 = "            For a book seller                   "
console.log(_string6.trim())//Output:For a book seller

//Removes the trailing white space and line terminator characters from a string.
console.log(_string6.trimEnd())//Output:"            For a book seller"

//Removes the leading white space and line terminator characters from a string
console.log(_string6.trimStart())//Output:"For a book seller            "











