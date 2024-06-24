
function removeDuplicates(type,array){

//    desired output Ali Zain Taj X O

let arr = array;
let myArr  = [];



    arr?.map((outerElement,outerIndex)=>{

        arr.map((innerElement,innerIndex)=>{
           
                if(outerElement == innerElement && outerIndex !== innerIndex){

                    //if any elements match and the index number is not same 
                    // so it will remove automatically
                        arr.splice(outerIndex,1);

                }

         })


        })

        console.log("Result",arr)



}

removeDuplicates("String",["Ali","Zain","Ali","Taj","X","O","X"]);
removeDuplicates("Number",[1,8,99,45,31,72,1,99,8,63]);