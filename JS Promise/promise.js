
//Q.1
/* function Sum(a, b){
    return a+b;
}
function Calculate (name, num1){
    console.log(name, num1);
}
Calculate("EA19", Sum(10,9)) */

// promise - promise are used to handle asynchonous operation in java script
// stages
//1.pending stage
//2.completed / resplve
//3. rejected

/* const PromiseFun = new Promise((resovle, reject) =>{
    let count =1;
    if(count === 1){
        resovle("Yes, count value is One");
    }
    else{
        reject("No, count is Different");
    }
})
PromiseFun.then((x)=> console.log("Resovle Part",x)).catch((err)=> console.log("Error Part",err)) */
// Create a Promise, and check is the number even or ODD. 
//and return the result on .then(Even) and .catch(Odd) method

/* const PromisEvenOdd = new Promise((a, b) =>{
    let number =1;
    if(number%2==0){
        a("THIS IS EVEN");
    }
    else{
        b("THIS IS ODD");
    }
})
PromisEvenOdd.then((num)=> console.log(num)).catch((error)=> console.log(error))
 */



//divide by 
/* function DivideFive (num1, num2){
    return new Promise((resolve, reject) =>{
        if((num1 * num2)%5==0){
            resolve("divide by 5")
        }else{
            reject("not divide by 5")
        }

    })
}
DivideFive(5, 10).then((x) => console.log(x)).catch((err) => console.log(err)) */


//Q.2
/* const printNumForEverySec = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 1000)
      }
  }
  printNumForEverySec(7); */

  //second method
  /*let count = 0
  setTimeout(() => {
    console.log(++count);
    setTimeout(() => {
        console.log(++count);
        setTimeout(() => {
            console.log(++count);
            setTimeout(() => {
                console.log(++count);
                setTimeout(() => {
                    console.log(++count);
                    setTimeout(() => {
                        console.log(++count);
                        setTimeout(() => {
                            console.log(++count);
                            
                          },7000)
                        
                      },6000)
                    
                  },5000)
                
              },4000)
            
          },3000)
        
      },2000)
    
  },1000) */




  function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');

