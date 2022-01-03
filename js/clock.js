
const clock=document.getElementById("clock");

function getClock() {
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    ///padStart 는 오직 string에서만 작용하기 때문에 string 변환 필요 ///

    clock.innerText=`${hours}:${minutes}:${seconds}`;

}

getClock();
setInterval(getClock,1000);
///getClock 함수를 setInterval 함수를 통해 매 초마다 수행 ///

