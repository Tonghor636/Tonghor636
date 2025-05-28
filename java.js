// Selecting elements for the toggle functionality
let togglebtn = document.querySelector('.togglebtn');
let nav = document.querySelector('.navlinks');
let links = document.querySelectorAll('.navlinks li');

togglebtn.addEventListener('click', function() {
    this.classList.toggle("click");  
    nav.classList.toggle("open");   
});


let type = new Typed('.input', {
    strings: ['UX UI Designer', 'Frontend Developer'],  
    typeSpeed: 70,  
    backSpeed: 70,  
    loop: true,      
});