// --------------------------DROP DOWN---------------------

const Question = document.querySelectorAll('.Questions');
const Answer = document.querySelectorAll('.Answer');

for (let i = 0; i < Question.length; i++) {
    Question[i].addEventListener('click', function () {
        if (Answer[i].style.display === '' || Answer[i].style.display === 'none') {
            Answer[i].style.display = 'block';
        } else {
            Answer[i].style.display = 'none';
        }
    });
}