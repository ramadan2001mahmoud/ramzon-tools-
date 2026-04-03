const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

if(localStorage.getItem('darkMode')==='true'){document.body.classList.add('dark-mode');}

const navToggle=document.getElementById('navToggle');
const navMenu=document.querySelector('.nav-menu');
navToggle.addEventListener('click',()=>{navMenu.classList.toggle('active');});
