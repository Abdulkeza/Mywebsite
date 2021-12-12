function validate(){
const form = document.getElementById('signup-form');
const name = document.getElementById('name');
const Lname = document.getElementById('Lname');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

var nameIndicator = document.getElementById('nameValid');
var LnameIndicator = document.getElementById('LnameValid');
var namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

name.addEventListener('keyup', ()=>{
    if(name.value.match(namePattern)){
        nameIndicator.classList.add('valid');
        nameIndicator.classList.remove('invalid');

    }else{
        nameIndicator.classList.add('invalid');
        nameIndicator.classList.remove('valid');
    }
    if(name.value == ''){
        nameIndicator.classList.remove('invalid');
        nameIndicator.classList.remove('valid');
    }
})

Lname.addEventListener('keyup', ()=>{
    if(Lname.value.match(namePattern)){
        LnameIndicator.classList.add('valid');
        LnameIndicator.classList.remove('invalid');
        

    }else{
        LnameIndicator.classList.add('invalid');
        LnameIndicator.classList.remove('valid');
    }
    if(Lname.value == ''){
        LnameIndicator.classList.remove('invalid');
        LnameIndicator.classList.remove('valid');
    }
})



const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailIndicator = document.getElementById("emailValid");

    email.addEventListener('keyup', ()=>{
        if(email.value.match(emailPattern)){
            emailIndicator.classList.add('valid');
            emailIndicator.classList.remove('invalid');

        }else{
            emailIndicator.classList.add('invalid');
            emailIndicator.classList.remove('valid');
        }
        if(email.value == ""){
            emailIndicator.classList.remove('invalid');
            emailIndicator.classList.remove('valid');
        }
    })



    const passwordPattern =  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    var passwordIndicator = document.getElementById('password1Valid');

    password1.addEventListener('keyup', ()=>{
        if(password1.value.match(passwordPattern)){
            passwordIndicator.classList.add('valid');
            passwordIndicator.classList.remove('invalid');
        }else{
            passwordIndicator.classList.add('invalid');
            passwordIndicator.classList.remove('valid');
        }
        if(password1.value == ""){
            passwordIndicator.classList.remove('invalid');
            passwordIndicator.classList.remove('valid');
        }
    })
  

    var password2Indicator = document.getElementById('password2Valid');

    password2.addEventListener('keyup', ()=>{
        if(password1.value === password2.value){
            password2Indicator.classList.add('valid');
            password2Indicator.classList.remove('invalid');
            console.log("password matched");

        }else{
            password2Indicator.classList.add('invalid');
            password2Indicator.classList.remove('valid');
        }
        if(password2.value == ""){
            password2Indicator.classList.remove('invalid');
            password2Indicator.classList.remove('valid');
        }
    })

}
validate();