const slides= document.querySelectorAll('.slide-container');
let i=0;

function next(){
    slides[i].classList.remove('active');
    i=(i+1)%slides.length;
    slides[i].classList.add('active');

}

function previous(){
    slides[i].classList.remove('active');
    i=(i-1+slides.length)%slides.length;
    slides[i].classList.add('active');

}