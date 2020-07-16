let navButton = document.getElementById('nav-button');


// Adding class to button on small screen

addClassChange = () => {

        navButton.classList.toggle('change');
}

// Events Listeners

navButton.addEventListener('click', addClassChange);
