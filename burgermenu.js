
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



