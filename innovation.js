
let openbutton = document.querySelector('.logstart .mnbuttn');
let closebutton = document.getElementById('closebutton');
let dropdownmenu = document.getElementById('menuu');


openbutton.onclick = function () {
    dropdownmenu.classList.toggle('display');
    openbutton.classList.add('displayNone');
    closebutton.classList.toggle('display');
}
closebutton.onclick = function () {
    dropdownmenu.classList.remove('display');
    closebutton.classList.toggle('display');
    openbutton.classList.remove('displayNone');
}


// ---------------------SIGN UP  VALIDATION ------------

const form = document.getElementById('formsignup');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('last-name');
const emailS = document.getElementById('signupemail');
const password = document.getElementById('signup-pass');
const passcheck = document.getElementById('confirm-pass');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkinputs(1);
    checkinputs(2);
    emailcheck();
    passwordcheck();
    
}) ;
function checkinputs(i) {
    let reg = /^[A-Za-z]{1,20}$/;
    if(firstname.value.match(reg)){
        firstname.style.border='2px solid green'; 
        document.getElementById('errorName'+i).innerHTML="";
        return true;
    }
    else {
        document.getElementById('errorName'+i).innerHTML="Errore invalide";
        firstname.style.border='2px solid red'; 
        return false;
    }
}
function emailcheck(){
    let rem = /^[A-Za-z0-9.-_]+@(gmail|outlook)\.com$/;
    if(emailS.value.match(rem)){
        emailS.style.border='2px solid green'; 
        document.getElementById('erroremail').innerHTML="";
        return true;
    }
    else {
        document.getElementById('erroremail').innerHTML="Errore invalide email";
        emailS.style.border='2px solid red'; 
        return false;
    }
}   
function passwordcheck(){
   let check = password.value;
   if(passcheck.value===check){
    password.style.border='2px solid green';
    passcheck.style.border='2px solid green';
    document.getElementById('errorcheckpass').innerHTML="";
    return true;
   }
   else{
      document.getElementById('errorcheckpass').innerHTML="errore invalide password";
      passcheck.style.border='2px solid red';
      password.style.border='2px solid red';
      return false;
   }
}

// --------------------------DROP DOWN---------------------

const Question = document.querySelectorAll('.Questions');
const Answer = document.querySelectorAll('.Answer');
for (let i = 0; i < Question.length; i++) {
    Question[i].addEventListener('click', function () {
        if (Answer[i].style.display === "none") {
            Answer[i].style.display == "block"
        } else {
            Answer[i].style.display == "none"
        }

    })
}









