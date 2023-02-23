const clock = document.getElementById("clock")

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes= String(date.getMinutes()).padStart(2, "0");
    const seconds= String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function setDisplayAppearance(self) {
    const body = document.querySelector('body');
    const btn = document.getElementById('btnDisplayMode');
    if (self.value === '다크모드로 전환') {
        body.style.backgroundColor ='black';
        body.style.color= 'white';
        btn.style.backgroundColor='yellow';
        btn.style.color ='black';
        self.value ='라이트모드로 전환';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color='black';
        btn.style.backgroundColor = 'black';
        btn.style.color='white';
        self.value='다크모드로 전환';
    }
}