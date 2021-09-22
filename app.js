const btns = document.querySelectorAll('.btn');
//selected all btns in a variable btns
const content = document.querySelectorAll('.page');
//selected all content in a variable in page
const big = document.querySelector('.content');
const popup=document.querySelector('.popup-user');





const loginpopup=document.querySelector('#cust').addEventListener('click' , showme);
const login= document.querySelector('.login-btn').addEventListener('click', showme2);
const signup= document.querySelector('.signup').addEventListener('click', showme);

function showme2(){
   // console.log(loginpopup);
    //console.log(login);
    popup.style.display='grid';
};

function showme(){
   // console.log(loginpopup);
    //console.log(login);
    popup.style.display='grid';
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
    let closeit=e.target.classList.contains('user_popup');
    if(closeit){
        popup.style.display='none';
    }
    //console.log(closeit);
    // console.log(closeit);
});