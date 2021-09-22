const btns = document.querySelectorAll('.btn');
//selected all btns in a variable btns
const content = document.querySelectorAll('.page');
//selected all content in a variable in page
const big = document.querySelector('.content');
const popup = document.querySelector('.popup-user');





const loginpopup = document.querySelector('#cust').addEventListener('click', showme);




function showme() {
    // console.log(logins);
    // console.log(signups);
    // console.log(loginpopup);
    popup.style.display = 'grid';
};

//console.log(popup);

big.addEventListener('click', function (e) {//click event on the main container
    let x = e.target.dataset.id;
    if (x) {
        btns.forEach(function (i) {
            i.classList.remove('btn-active');
        });
        e.target.classList.add('btn-active');
        content.forEach(function (i) {
            i.classList.remove('content-active');
        });
        const element = document.getElementById(x);
        element.classList.add('content-active')
    }
    let closeit = e.target.classList.contains('user_popup');
    if (closeit) {
        popup.style.display = 'none';
    }
    //console.log(closeit);
    // console.log(closeit);
});


const signups = document.querySelector('#cust-signup').addEventListener('click', showme);
const logins = document.querySelector('#cust-login').addEventListener('click', showme);