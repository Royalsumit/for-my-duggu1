document.addEventListener("DOMContentLoaded", function(){

    let audio = document.getElementById("globalMusic");
    if(!audio) return;

    let savedTime = localStorage.getItem("musicTime");
    if(savedTime){
        audio.currentTime = savedTime;
    }

    audio.play().catch(()=>{});

    setInterval(()=>{
        localStorage.setItem("musicTime", audio.currentTime);
    }, 1000);

});
