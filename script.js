// Getting elemnts from DOM

let dots = document.getElementById('dots');
let myBtn = document.getElementById('myBtn');
let myBtn2 = document.getElementById('myBtn2');
let myBtn3 = document.getElementById('myBtn3');
let more = document.getElementById('more');
let navButton = document.getElementById('nav-button');


// Adding class to button on small screen

addClassChange = () => {

        navButton.classList.toggle('change');
}


// Read more or less function
showMore = () => {
                   
        
        
        if(dots.style.display === 'none'){
                dots.style.display = 'inline';
                myBtn.innerText = "Read more";
                more.style.display = "none";
        }else {
               
                dots.style.display = 'none';
                myBtn.innerText = "Read less";
                more.style.display = "inline";


        }
        



}
showMore2 = () => {
                   
        
        
        if(dots2.style.display === 'none'){
                dots2.style.display = 'inline';
                myBtn2.innerText = "Read more";
                more2.style.display = "none";
        }else {
               
                dots2.style.display = 'none';
                myBtn2.innerText = "Read less";
                more2.style.display = "inline";


        }
        



}
showMore3 = () => {
                   
        
        
        if(dots3.style.display === 'none'){
                dots3.style.display = 'inline';
                myBtn3.innerText = "Read more";
                more3.style.display = "none";
        }else {
               
                dots3.style.display = 'none';
                myBtn3.innerText = "Read less";
                more3.style.display = "inline";


        }
        



}

// Events Listeners

navButton.addEventListener('click', addClassChange);  // change class on hamburger menu
myBtn.addEventListener('click',showMore);
myBtn2.addEventListener('click',showMore2);
myBtn3.addEventListener('click',showMore3);



