const loginForm = document.querySelector('#login-form');
const logIninput = document.querySelector('#login-form input');
const greetingH1 = document.querySelector('#greeting');

function onloginSubmit(event) {
   event.preventDefault();
   const username = logIninput.value
   loginForm.classList.add('hide');
   greetingH1.innerHTML=username;
   greetingH1.classList.remove('hide');
   window.localStorage.setItem('username', username);
}

const getLocal = window.localStorage.getItem('username');
if (getLocal) {
    //getLocal의 값이 아직 있기에 아무리 새로고침을 해도 아래의 if문의 설정이 남게 된다.
    loginForm.classList.add('hide');
    greetingH1.innerHTML = getLocal;
    greetingH1.classList.remove('hide');
}

loginForm.addEventListener('submit', onloginSubmit);