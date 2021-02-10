var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count){
    while(count > 0){
    chocolates.push(color);
    count-=1;
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    let res = chocolates.splice(0,number);
    return res;
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    let res = [];
    while(number > 0){
        number-=1;
        res.push(chocolates.pop());
    }
    return res;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    let res = []
    let i = chocolates.length-1;
    while(number > 0 && i >= 0){
        if(chocolates[i] == color){
            res.push(color);
            number-=1;
        }
        i-=1
    }
    return res;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(){
    let array = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    let count = [0,0,0,0,0,0,0];
    for(let i = 0;i < chocolates.length;i++){
            count[array.indexOf(chocolates[i])] += 1;   
    }
    return count;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(){
    let count = noOfChocolates();
    let a = [['green',count[0]],['silver',count[1]],['blue',count[2]],['crimson',count[3]],["purple",count[4]],["red",count[5]] , ["pink",count[6]]];
  //  dict.sort((a, b) => (a.color > b.color) ? 1 : -1)
   
    a.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }

    for(let i = 0;i < a.length;i++){
        console.log(a[i][0]+" "+a[i][1]);
    }
    return a;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor){
        let result_chocos = chocolates.map(function(item,index,chocolates){
                if(color == item && number > 0){
                    chocolates[index] = finalColor;
                    number -= 1;
                }
        });
        return chocolates;
}



//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
    let finalchocos = [0,chocolates];
    let result_chocos = chocolates.map(function(item,index,chocolates){
        if(color == item){
            chocolates[index] = finalColor;
             finalchocos[0] += 1;
        }else if(item == finalColor){
            finalchocos[0] += 1;
        }
    });
    finalchocos[1] = chocolates;
    return finalchocos;
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates,color){
    console.log(chocolates.splice(chocolates.indexOf(color),1));
    return color;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates,number){
     let count = "";
    for(let i = 0;i < chocolates.length-2 && number > 0;){
        if(chocolates[i] == chocolates[i+1] && chocolates[i] == chocolates[i+2]){
            i += 2;
            count = count +" "+chocolates[i];
            number -= 1;
        }else{
            i+=1;
        }
    }
    return count;
}