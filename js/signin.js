const logData = JSON.parse(localStorage.getItem('updatedData'));
const signIn = document.querySelector('#signin');

signIn.addEventListener('click',()=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const details = {
        username:username,
        password:password,
    }

    let flag=false;
    for(let i=0;i<logData.length;i++){
        if(logData[i].username === details.username && logData[i].password === details.password){
            localStorage.setItem('prof_name',details.username);
            flag = true;
        }
    }

    if(flag === true){
        open('../pages/todo.html','_self');
    }
    else{
        alert('Incorrect details');
    }
});