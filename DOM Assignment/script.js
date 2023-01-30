let butn = document.getElementById('butn');
let result = document.getElementById('result');


let ranNum = document.getElementById('ranNumber');
 ranNum = parseInt(Math.random() * 100 + 1);
let chances = 100;

let background = document.getElementById('body');

function maincheck() {
    var invalue = document.getElementById('uservalue').value;
    
   
    {
       
        //chances = document.getElementById('chancevalue');
       if (chances !== 0)
        {
            if (invalue < ranNum) {
                background.style.backgroundColor = "blue";
                background.style.color = "black";
                result.innerHTML = "value is low --> try high value";
                //chances--;
            }
            else if (invalue > ranNum) {
                result.innerHTML = "value is high--> try less value";
                background.style.backgroundColor = "red";
              //  chances--;
            }
             else{
                  background.style.backgroundColor = "lightgreen";
                  result.innerHTML = "**..Hurray you won..**";
              }
        }
        chances--;
    }
   
 }

       

//let chancevalue = paarseInt(document.getElementById('chancevalue').value);


//let chances = 100;

//

//let highscore = document.getElementById('highscore');
 //highscore = 0;

// function maincheck() {
    
//     var input = document.getElementById('uservalue').value;
    
//         if (input < ranNum) {
//             background.style.backgroundColor = "yellow";
//             background.style.color = "black";
//             result.innerHTML = "value is low --> try high value";
//             chances--;
         
//         }
//         if (input > ranNum) {
//             result.innerHTML = "your value is high--> try less value";
//             background.style.backgroundColor = "red";
//             chances--;
          
//         }
           
//        
       
    
// }

function reloadgame() {
    background.style.backgroundcolor = "black";
    let newinput = document.getElementById("uservalue").value;
    newinput.innerHTML = " ";
    chances = 100;
}



