let message=document.getElementById('message');
let nam=document.getElementById('nam');
let age=document.getElementById('age');
let submit=document.getElementById('submit');

submit.addEventListener('click',function () {
    if (nam.value===''|| age.value==='') {
        alert('Please Fill all Fields Correctly')
        message.style.fontSize='180%'
        message.style.textAlign='center'
        message.style.color='red'
    }else{
        message.innerHTML=''
    }

    if(nam.value===''){
        nam.style.border='solid 1px red';
    }else{
        nam.style.border='solid 1px green';
    }

    if(age.value===''){
        age.style.border='solid 1px red'
    }else{
        age.style.border='solid 1px green'
    }

    if(age.value<=5){
        message.innerHTML=`Sorry ${nam.value} you cannot do this`;
    }else if(age.value>5 && age.value<=10){
        message.innerHTML=`Sorry ${nam.value} you are still too young for this`;
        message.style.fontSize='180%'
        message.style.textAlign='center'
        message.style.color='red'
    }
    else if(age.value>10 && age.value<=15){
        message.innerHTML=`Sorry, ${nam.value} you are just a little too young for this`;
        message.style.fontSize='180%'
        message.style.textAlign='center'
        message.style.color='red'
    }else if(age.value>15 && age.value<=17){
        message.innerHTML=`Sorry, ${nam.value} you just need to wait a little longer`;
        message.style.fontSize='180%'
        message.style.textAlign='center'
        message.style.color='red'
    }
    else{
        message.innerHTML=`Congratulatious ,${nam.value} 😃 You are now Eligible to drive`;
        message.style.color='green';
        message.style.fontSize='180%'
        message.style.textAlign='center'
    }
});