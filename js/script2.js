const backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', function(){
    checkLocal();
})

function checkLocal(){
    if(localStorage.nameS !== undefined){
        console.log('not undefined ! ' + localStorage.nameS);
        window.location.href="./index.html";
    }else{
        console.log('undefined ! ' + localStorage.nameS);
    }
}
