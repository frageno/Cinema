// Getting elemnts from DOM

let dots = document.getElementById('dots');
let myBtn = document.getElementById('myBtn');
let myBtn2 = document.getElementById('myBtn2');
let myBtn3 = document.getElementById('myBtn3');
let more = document.getElementById('more');
let navButton = document.getElementById('nav-button');
let movie = document.getElementById('movie');
let img = document.getElementById('img');
let about = document.getElementById('about-us');
let screenContainer = document.querySelector('.screen-container');
const seats = document.querySelectorAll('.seat .row:not(.occupied)');

screenContainer.addEventListener('click', (e)=> {
        if(e.target.classList.contains('seat')){
                e.target.classList.toggle('selected');
                
        };
});

changeImage = (e) => {
        
        if(e.target.value === '12'){
                        
                        img.innerHTML = '<img src="img/guard.jpg" alt="guard" width="204" height="295">';
                        
        }else {
                img.innerHTML = '<img src="img/avangers.jpg" alt="avangers">';
                
        }
}
movie.addEventListener('change',changeImage);
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



