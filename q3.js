function isPalindrome(number){

    let num = number.toString();
    let len = number.toString().length;



    for(let i=0; i < len / 2; i++){
    

        console.log("i",i);
       
        if(num[i] !== num[len - 1 - i]) {

             return "It's not palindrome";
        }
         
        
    }

    return "It's a palindrome";
}


const result = isPalindrome("madam");

console.log("result",result);