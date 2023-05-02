// 콜백을 프로미스로 변경하는 예제

//콜백함수
function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{
        //첫번째 콜백
        if(err){
            return console.error(err);
        }
        user.name='zero';
        user.save((err)=>{
            //두번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({gender : 'm'}, (err,user)=>{
                //세번째 콜백
                //생략
            });
        });
    });
}
//프로미스
function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name = 'zero';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender: 'm'});
    })
    .then((user)=>{
        //생략
    })
    .catch(err=>{
        console.error(err);
    });
}
