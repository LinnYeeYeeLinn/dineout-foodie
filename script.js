const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navMenu = document.querySelector('.navMenu');
const aTags = document.querySelectorAll('.navMenu a');

let tl = gsap.timeline({defaults: {duration: .7}});
tl.from('.navMenu', {clipPath: 'circle(0% at 50% 50%)'})
    .from('.navMenu a', {opacity: 0, stagger: .3, y: -20})

tl.pause();
openMenu.addEventListener('click', () => {
    tl.play();
})

closeMenu.addEventListener('click', () => {
    tl.reverse(.4);
})

for (const aTag of aTags) {
    aTag.addEventListener('click', () => {
        tl.reverse(.4);
    })
}

const navFixed = document.querySelector('.navFixed');
const logo = document.querySelector('.logo');
window.onscroll = () => {
    if(window.scrollY < 300){
        navFixed.style.backgroundColor = 'transparent';
        // logo.style.color = "";
    }else{
        navFixed.style.backgroundColor = "rgba(0,0,0,.5)";
        // logo.style.color = "black";
    }
}


//Tab
const tabContent = document.querySelectorAll('.tabContent');
function openTab(event, menu){
    for(let i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
        document.getElementById(menu).style.display = "block";
    }
}

// Tab Active

$(document).ready(function(){
    $('.activeLi li').click(function(){
        $('.activeLi li').removeClass('tabActive');
        $(this).addClass('tabActive');
    })
})