/* ================= PAGE LOAD FADE FIX ================= */

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";

    // Gallery auto load
    const grid = document.getElementById("mediaGrid");

    if (grid) {
        for (let i = 43; i <= 133; i++) {

            let img = document.createElement("img");

            img.src = "images/photo" + i + ".jpg";

            img.onerror = function () {
                this.src = "images/photo" + i + ".png";
            };

            img.onclick = function () {
                openFull(this.src);
            };

            grid.appendChild(img);
        }
    }
});


/* ================= PASSWORD ================= */

function checkPassword() {

    var pass = document.getElementById("password").value;

    if (pass === "14feb2005") {

        localStorage.setItem("musicTime", 0);

        // Fade out before redirect
        document.body.style.opacity = "0";

        setTimeout(function () {
            window.location.href = "birthday.html";
        }, 400);

    } else {
        document.getElementById("error").innerText = "Wrong Password Duggu 😏";
    }
}


/* ================= FULLSCREEN IMAGE ================= */

function openFull(src) {

    const box = document.getElementById("fullscreen");
    const content = document.getElementById("fullContent");

    if (!box || !content) return;

    content.innerHTML = `<img src="${src}">`;
    box.style.display = "flex";
}

function closeFull() {
    const box = document.getElementById("fullscreen");
    if (box) box.style.display = "none";
}


/* ================= VALENTINE GAME ================= */

let noCount = 0;

const messages = [
    "Think again bubbu 😌",
    "I know your answer already 💕",
    "No? You're joking right? 😏",
    "Stop playingggg 💖",
    "You can't escape loveee 😭",
    "Bas YES dabaa dooo 🥺",
    "Ab bas bhi karo 😭 press YES 💍"
];

function handleNo() {

    const msg = document.getElementById("noMessage");
    const noBtn = document.querySelector(".noBtn");

    if (msg) {
        if (noCount < messages.length) {
            msg.innerText = messages[noCount];
            noCount++;
        } else {
            msg.innerText = messages[messages.length - 1];
        }
    }

    if (noBtn) {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }
}


function acceptLove() {

    if (typeof confetti === "function") {
        confetti({
            particleCount: 300,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    const text = "💍 I Want To Spend My Whole Life With You 💍";
    const subText = "Shaadi ke baad roz Valentine’s Day 😌";

    const box = document.getElementById("surpriseBox");
    const typewriter = document.getElementById("typewriter");
    const subLine = document.getElementById("subLine");

    if (!box || !typewriter || !subLine) return;

    box.style.display = "block";
    typewriter.innerHTML = "";
    subLine.innerHTML = "";

    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        } else {
            subLine.innerHTML = subText;
        }
    }

    typeEffect();

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
