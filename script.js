let searchBtn= document.querySelector('#search-btn');
let searchBar= document.querySelector('.search-bar-container');

let formBtn= document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');



window.onscroll=() =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})



const allStar = document.querySelectorAll(".rating .star")

allStar.forEach((item, idx) => {
    item.addEventListener('click', function() {
        // let click=0

        // allStar.forEach(i=> {
        //     i.classList.replace('fas fa-star','far fa-star')
        //     i.classList.remove('active')
        // })
        for(let i=0; i<allStar.length; i++){
            if(i<=idx){
                allStar[i].classList.replace('far fa-star','fas fa-star')
                allStar[i].classList.add('active')
            } 
            // else{
            //     allStar[i].style.setProperty('--i',click)
            //     click++
            // }
        }
    })
})