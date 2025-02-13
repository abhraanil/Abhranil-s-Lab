const emaildata = ["abhraanil@gmail.com","nil@gmail.com",]
but.addEventListener('click', f1);
const fname = document.getElementById('full-name');
const emailf = document.getElementById('email');
const butf = document.getElementById('but');

function f1() {
    if (emaildata.find((email) => email === emailf.value)) {
        window.location.href = 'https://www.abhranil.site';
    }else if (emailf.value === '') {}
    
    else {
        alert('Please enter a valid email address');
    }
}

butf.addEventListener('click', f1());


