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
        return new Promise((resolve,reject)=>{
            resolve('message1');
        })
    })
    .then((message2)=>{
        console.log(message2);  //new promise의 resolve안의 넣어준 인수('message1')로 인해 message2='message1'이 됨
        return new Promise((resolve,reject)=>{
            resolve('message2');    //new promise의 resolve안의 넣어준 인수('message2')
        })
    })
    .then((message3)=>{
        console.log(message3);  //new promise의 resolve안의 넣어준 인수('message2')로 인해 message3='message2'이 됨
    })
    .catch((error)=>{
        console.error(error);   //실패(reject)한 경우 실행
    })
    .finally(()=>{
        console.log('무조건');  //끝나고 무조건 실행
    })