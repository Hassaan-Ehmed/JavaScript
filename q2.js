//Write a function that takes an array of numbers and returns the maximum number.



function getMax(array){


    let max = array[0]; // start with 2


    // first grab 1st index and then treverse through array


    // we start array from 2nd index because in comparision we already compare with 1st
    // index that we are assign to max variable
    for(let i=1; i < array.length; i++){

        if(array[i] > max){ // ab tak jo max osse bara hogaya he ye number
            
            max = array[i]; // max ko update karo with this current index
        }
        
    }

    console.log("Max",max); // finally get maximum number

}


getMax([2,100,3,50]);