console.log('졸업전시회 초대!');

const box = document.querySelector('.box');
const nameInput = document.querySelector('.name-input');
const checkYourBtn = document.querySelector('.check-your-btn');
const howtocomeBtn = document.querySelector('.howtocome-btn');
const checkYourCon = document.querySelector('.check-your-con');
const nameDisplay = document.querySelector('.name-display');
const dateCon = document.querySelector('.date-con');
const timeCon = document.querySelector('.time-con');

function onNameInput(e){
    e.preventDefault();
    if(e.type === "click"){
        if(this.classList.contains('name-input-out')){
            this.classList.remove('name-input-out');
            this.classList.add('name-input-on');
            this.value = "";
        }
    }
}
nameInput.addEventListener('click', onNameInput);

function onCheckYourBtn(e){
    e.preventDefault();
    if(e.type === "click"){
        for(let i = 0;i<comeList.length;i++){
            // console.log(comeList[i]);
            if(comeList[i].name == nameInput.value){
                nameDisplay.innerText = comeList[i].name;
                dateCon.innerText = comeList[i].date;
                timeCon.innerText = comeList[i].time;
                changeToCheck();
                return;
            }
            else if(comeList[i].name !== nameInput.value){
                console.log('없는 정보');
                nameInput.style.transition = "0.1s";
                nameInput.style.opacity="0%";
                setTimeout(function(){
                    nameInput.style.opacity="100%";
                    nameInput.value = "이름을 확인해주세요.";
                },100);
                nameInput.classList.remove('name-input-on');
                nameInput.classList.add('name-input-out');
            }
        }
    }
}
function changeToCheck(){
    nameInput.classList.add('hidden-area-t');
    checkYourCon.classList.add('visible-area');
    checkYourBtn.classList.add('hidden-area-t');
    howtocomeBtn.classList.add('visible-area-t');
    box.style.transition = "0.5s ease";
    box.style.height = "75.4926vh";
    localStorage.nameS = nameInput.value;
}
checkYourBtn.addEventListener('click', onCheckYourBtn);

howtocomeBtn.addEventListener('click', function(){
    window.location.href = "./howtocome.html";
})