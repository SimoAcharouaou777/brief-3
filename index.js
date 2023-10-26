//   DROP DOWN PAGES

const firstpage = document.querySelector('.ourservice');
const modelplan = document.querySelector('.modelplan');
const ourpromice = document.querySelector('.ourpromice');
const firstpar = document.getElementById('firstpar');
const secondpar = document.getElementById('secondpar');
const thirdpar = document.getElementById('thirdpar');

secondpar.addEventListener('click', function () {
  firstpage.style.display="none"
  modelplan.style.display="none"
  ourpromice.style.display="block"
})
firstpar.addEventListener('click',function(){
    firstpage.style.display="flex"
    modelplan.style.display="none"
    ourpromice.style.display="none"
})
thirdpar.addEventListener('click',function(){
    modelplan.style.display="block"
    firstpage.style.display="none"
    ourpromice.style.display="none"
})



// DROP DOWN PAGES IN MOBILE

const showmore = document.querySelector('#downarrow');
const modelplanmob = document.querySelector('.modelplan-mob');
const ourpromicemob = document.querySelector('.ourpromice-mob');
const options = document.querySelector('.optionsmob');
const optionA = document.querySelector('#optionA');
const optionB = document.querySelector('#optionB');
const optionC = document.querySelector('#optionC');
const firstoption = document.querySelector('.firstoption')

showmore.addEventListener('click',function(){
    options.classList.toggle('display')
})
optionA.addEventListener('click',function(){
    modelplanmob.style.display="none"
    firstoption.style.display="none"
    ourpromicemob.style.display="block"
})
optionB.addEventListener('click',function(){
    modelplanmob.style.display="block"
    firstoption.style.display="none"
    ourpromicemob.style.display="none"
    
})
optionC.addEventListener('click',function(){
    firstoption.style.display="block"
    modelplanmob.style.display="none"
    ourpromicemob.style.display="none"
})