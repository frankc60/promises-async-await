
let promiseCount = 0;

let p1 = new Promise(
// The resolver function is called with the ability to resolve or
// reject the promise
    (resolve, reject) => {
        console.log(`async code started.`);
        
        promiseCount++;

        let timeout = setTimeout(
            function() {
                // We fulfill the promise !
                resolve(promiseCount);
            }, Math.random() * 2000 + 1000);
    }
);



    // We define what to do when the promise is resolved with the then() call,
    // and what to do when the promise is rejected with the catch() call
    p1.then(
        // Log the fulfillment value
        function(val) {
            console.log("Promise fulfilled: " +val);
        })
    .catch(
        // Log the rejection reason
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });


//****************************************************************************** */

let do1 = (a) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a+1);
        }, 2000);

    });
}

let do2 = (a) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+1);
        }, 2000);

    });
}

let do3 = (a) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //resolve(a+1);
            //do a reject, and the async function will use the catch()
            reject(a+1);
        }, 2000);

    });
}




//async await accepts promises.
/* The purpose of async/await functions is to simplify the
 behavior of using 
promises synchronously and to perform some behavior on a group of Promises. 
Just as Promises are similar to structured callbacks, 
async/await is similar to combining generators and promises.*/

async function asyncCall() {
    try {
        console.log("async calling");
      let result = await do1(1);
      let result2 = await do2(result);
      let finResult = await do3(result2);
     console.log(`Got final result: ${finResult}`);
    } catch(error) {
      console.log(`got a rejection! ${error}`);
    }
  }

  asyncCall();