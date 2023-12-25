const clearBtn = document.getElementById('close');
const navBarBobile = document.getElementById('nav-bar-mobile');
const navBar = document.getElementById('nav-bar');

clearBtn.addEventListener('click',()=>{
navBarBobile.style.visibility = 'hidden';
navBar.style.visibility = 'visible';

});

navBar.addEventListener('click',()=>{
navBarBobile.style.visibility = 'visible';
navBar.style.visibility = 'hidden';
});


const date = (document.getElementById('date').innerHTML = new Date().getFullYear()
);
