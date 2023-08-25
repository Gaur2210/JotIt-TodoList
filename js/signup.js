const signUp = document.querySelector('#signup');

const saveData = [];

signUp.addEventListener('click',()=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('password1').value;

    if(username != '' && password.length >= 8){
        if(password === confirmPass){
            const details = {
                 username:username,
                 password:password,
            }
            let flag = true;
            for(let i=0;i<saveData.length;i++){
                  if(saveData[i].username === details.username){
                    flag = false;
                  }
            }

            if(!saveData.includes(details) && flag===true){
                saveData.push(details);
                localStorage.setItem('updatedData', JSON.stringify(saveData));
                open('../pages/signin.html','_self');
            }
        }
        else{
            alert('Passwords do not match.');
        }
    }
    else if(password.length < 8 && password.length > 0){
        alert('Password should contain at least 8 characters.');
    }
    else{
        alert('Please fill in all the details.');
    }

});

