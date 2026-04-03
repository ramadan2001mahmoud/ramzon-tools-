// تفعيل الوضع الداكن
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// حفظ الوضع الداكن عند إعادة التحميل
if(localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// تفعيل القائمة على الموبايل
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
