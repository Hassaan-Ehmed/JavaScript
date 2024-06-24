// Write a function that accepts two arrays and returns an array of common elements.


function getCommonElements(array1,array2){


    let commonElements = array1.filter((el)=>{

        if(array2.includes(el)){

            return true;
        }
        else{
            return false;
        }
    })


    
    console.log("result",commonElements)
    // console.log("Arrays",array1,array2)

}


let girlNames = ["Ayesha","Naseem","Hafsa","Areeba","Shamim"];
let boyNames = ["Shamim","Zain","Burhan","Naseem","Ali"];

getCommonElements(girlNames,boyNames);
// getCommonElements(["Apple","Mango","Strawberry"],["Grapes","Orange","Mango"]);
