const correctAnswers = ['A', 'B', 'A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 16.67;
        }
    });

    score = Math.round(score);

    // show results on page
    scrollTo(0,0); // scroll to top of page
    
    const result = document.querySelector('.result');
    result.classList.remove('d-none');
    result.classList.add('d-block');

    let output = 0;
    const timer = setInterval(() => {
        // const displayScore = document.querySelector('.displayScore');
        // displayScore.textContent = `${score}%`;
        result.querySelector('span').textContent = `${output}%`;

        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);




})

// window object (global object)
// console.log('hello');
// window.console.log('hello');

// setTimeout(() => {
//     alert('hello there');
// }, 3000)

// let i = 0;
// const timer = setInterval(() => {
//     console.log('helloooo');
//     i++;
//     if (i === 5) {
//         clearInterval(timer);
//     }
// }, 1000);

