const promise1 = Promise.resolve('pass1');
const promise2 = Promise.resolve('pass2');
(async()=>{
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();