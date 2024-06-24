// Write a function that takes a string and returns it reversed.

function reversedString(stringValue){

    newString = [];

    let str = stringValue;

    for(i in str){
        
        newString.unshift(str[i]);
    }


    // console.log(newString.join(""));
    return newString.join("");

}


let result  = reversedString("madam");

console.log("result",result);




