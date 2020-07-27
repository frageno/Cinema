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



