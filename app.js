const loginradio = document.querySelector('#login');
const signupradio = document.querySelector('#signup');

const box = document.querySelector('.tab-box');


loginradio.addEventListener('click', showL);
signupradio.addEventListener('click', showS)

function showL(e) {
    e.preventDefault();
    box.children[0].style.visibility = 'visible';
    box.children[1].style.visibility = 'hidden';
    // console.log(box.children[1]);
}
function showS(e) {
    e.preventDefault();
    box.children[0].style.visibility = 'hidden';
    box.children[1].style.visibility = 'visible';
    // console.log(box.children[1]);
}