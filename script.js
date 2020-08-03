// Getting elemnts from DOM


const navButton = document.getElementById('nav-button');
const screenContainer = document.querySelector('.screen-container');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const overlay2 = document.getElementById('overlay2');
const booking = document.querySelectorAll('.booking');
const count = document.getElementById('count');
const img = document.getElementById("img");
const movie = document.getElementById("movie");


setTimeout(function(){
        $('.loader-bg').toggle();
},1500); // timeout to preloader




showError = (input,message) =>{
    const formControl = input.parentElement;
    formControl.className = 'form_control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}
showSuccess = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'form_control success';


}
checkRequired = (inputArr) => {
    inputArr.forEach((input)=>{
        if(input.value.trim() === ''){
            showError(input,'This field cannot be empty!');
        }
        else{
            showSuccess(input);
        }
    });
}
function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Email is not valid');
    }
}

checkPassword = (input,min,max) =>{
    if(input.value.length < min){
        showError(input,'Must be at least 6 characters');
    }else if(input.value.length>max){
        showError(input, 'Must be less than 25 characters');
    }
    else {
        showSuccess(input);
    }
}
checkMatch = (input1, input2) =>{
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match!');
    }
}

// event listener

form.addEventListener('click', (e)=>{
        let form = document.getElementById('form');
        let username = document.getElementById('username');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let password2 = document.getElementById('password2');
    e.preventDefault();


    checkRequired([username,email,password,password2]);
    validateEmail(email);
    checkPassword(password, 6,25);
    checkMatch(password,password2);





});

// Changing video images onclick
changeImage = (e) => {

        if(e.target.value === '11'){

                img.innerHTML = '<img src="img/guard.png">';

        }
        else if(e.target.value === '12'){
                img.innerHTML = '<img src="img/AVENGERS.jpg">';

        }
        else if(e.target.value === '13'){
                img.innerHTML = '<img src="img/ip-man.jpg">';

        }
        else {
                img.innerHTML = '<img src="img/grayhound.jpg" alt="avangers">';

        }
}







// Adding class to button on small screen

addClassChange = () => {

        navButton.classList.toggle('change');
}


// Read more or less function




// Events for modal FAQ

openModalButtons.forEach(button => {
        button.addEventListener('click', () =>{
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
        })
});
closeModalButtons.forEach(button => {
        button.addEventListener('click', () =>{
                const modal = button.closest('.modal1');
                closeModal(modal);
        })
});
overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal1.active');
        modals.forEach(modal => {
                closeModal(modal);
        });

});
function openModal(modal){
        if(modal === null) return
        modal.classList.add('active');
        overlay.classList.add('active');

}
function closeModal(modal){
        if(modal === null) return
        modal.classList.remove('active');
        overlay.classList.remove('active');
}
openModalButtons.forEach(button => {
        button.addEventListener('click', () =>{
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
        })
});
closeModalButtons.forEach(button => {
        button.addEventListener('click', () =>{
                const modal = button.closest('.modal2');
                closeModal(modal);
        })
});
overlay2.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal2.active');
        modals.forEach(modal => {
                closeModal(modal);
        });

});
function openModal(modal){
        if(modal === null) return
        modal.classList.add('active');
        overlay2.classList.add('active');

}
function closeModal(modal){
        if(modal === null) return
        modal.classList.remove('active');
        overlay2.classList.remove('active');
}









function updateCount () {
        const selectedSeats = document.querySelectorAll('.row .seat.selected');
        const selectedSeatsCount = selectedSeats.length;
        count.innerHTML = selectedSeatsCount;
}



// Events Listeners

navButton.addEventListener('click', addClassChange);  // change class on hamburger menu
screenContainer.addEventListener('click', (e)=> {
        if(e.target.classList.contains('seat')){
                e.target.classList.toggle('selected');
                updateCount();
        };
}); // select seat
movie.addEventListener('click',changeImage); // change images



