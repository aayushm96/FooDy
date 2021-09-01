const loginradio = document.querySelector('#login');
const signupradio = document.querySelector('#signup');

const box = document.querySelector('.tab-box');


loginradio.addEventListener('click', showL);
signupradio.addEventListener('click', showS)

function showL(e) {
    e.preventDefault();
    box.children[0].style.display = 'block';
    box.children[1].style.display = 'none';
    // console.log(box.children[1]);
}
function showS(e) {
    e.preventDefault();
    box.children[0].style.display = 'none';
    box.children[1].style.display = 'block';
    // console.log(box.children[1]);
}