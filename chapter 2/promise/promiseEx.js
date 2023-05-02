const condition = true; //true이면 resolve, false이면 reject
const promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        console.log(message);   //성공(resolve)한 경우 실행
    })
    .catch((error)=>{
        console.error(error);   //실패(reject)한 경우 실행
    })
    .finally(()=>{
        console.log('무조건');  //끝나고 무조건 실행
    })