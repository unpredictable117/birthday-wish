const letterContent = `
To My Billlluuuuu ❤️

Dear Archana,

Happy Birthday, my love. ❤️

Today is your day, but honestly, every day feels special because you are a part of my life.

Thank you for every smile you've given me, every laugh we've shared, every memory we've created together.

I love the way you smile, the way you talk, the way you care, and the beautiful heart that makes you who you are.

Whenever life becomes difficult, thinking about you brings me peace.

You are one of the best things that has ever happened to me.

Thank you for being you.
Thank you for choosing me.
Thank you for making my life brighter.

No matter where life takes us, a part of my heart will always belong to you.

Happy Birthday Billlluuuuu ❤️

Forever Yours,

Ankit ❤️
`;

let pass = "";

const correctPass = "081709";

/* PAGE NAVIGATION */

function showPasscode(){

document.getElementById("welcome").classList.remove("active");
document.getElementById("passcode").classList.add("active");

}

/* PASSCODE SYSTEM */

function updateBoxes(){

for(let i=1;i<=6;i++){

const box = document.getElementById("d"+i);

if(pass[i-1]){

box.innerText = pass[i-1];

}else{

box.innerText = "";

}

}

}

function press(num){

if(pass.length < 6){

pass += num;
updateBoxes();

}

}

function backspace(){

pass = pass.slice(0,-1);
updateBoxes();

}

function clearPass(){

pass = "";
updateBoxes();

}

function submitPass(){

if(pass === correctPass){

document.getElementById("passcode").classList.remove("active");
document.getElementById("gift").classList.add("active");

}else{

alert("Wrong Passcode ❤️");
clearPass();

}

}
function openGift(){

document.getElementById("gift").classList.remove("active");
document.getElementById("gallery").classList.add("active");

}

/* GIFT PAGE */

function showReasons(){

document.getElementById("gallery").classList.remove("active");
document.getElementById("reasons").classList.add("active");

currentReason = 0;

const reason = reasons[0];

document.getElementById("reasonTitle").innerText =
reason.title;

document.getElementById("reasonText").innerText =
reason.text;
document.getElementById("reasonMedia")

const mediaDiv = document.getElementById("reasonMedia");

if(reason.type === "image" || reason.type === "gif"){

mediaDiv.innerHTML = `
<img src="${reason.src}" class="reason-media">
`;

}

if(reason.type === "video"){

mediaDiv.innerHTML = `
<video class="reason-media" controls autoplay muted>
<source src="${reason.src}" type="video/mp4">
</video>
`;

}
}
const reasons = [

{
title:"1. Your Eyes 👀",
text:"I could get lost in your eyes forever.",
type:"image",
src:"images/reasons/eyes.jpg"
},

{
title:"2. Your Smile 😊",
text:"Your smile can make my worst day better.",
type:"video",
src:"videos/smile.mp4"
},

{
title:"3. The Way You Make Faces 😝",
text:"Even your silly expressions are adorable.",
type:"video",
src:"videos/faces.mp4"
},

{
title:"4. The Way You Hug Me 🤗",
text:"Nothing feels safer than your hugs.",
type:"image",
src:"images/reasons/hug.jpg"
},

{
title:"5. The Way You Look At Me ❤️",
text:"That look makes me feel like the luckiest man alive.",
type:"image",
src:"images/reasons/look.jpg"
},

{
title:"6. The Way You Flip Your Hair 💁‍♀️",
text:"You probably don't realize how cute it is.",
type:"image",
src:"images/reasons/hair.jpg"
},

{
title:"7. The Way You Love Me 💕",
text:"Your love makes everything better.",
type:"image",
src:"images/reasons/love.jpg"
},

{
title:"8. Your Lips 💋",
text:"One of my favorite things about you.",
type:"video",
src:"videos/lips.mp4"
},

{
title:"9. Your hottness 🥰",
text:"Because every little thing about you is dripping hot.",
type:"image",
src:"images/reasons/hot.jpg"
},

{
title:"10. Your Romance ❤️",
text:"You make every moment feel special.",
type:"gif",
src:"gifs/romance.gif"
},

{
title:"11. Your Yapping 😆",
text:"I could listen to you talk for hours.",
type:"image",
src:"images/reasons/yapping.jpg"
},

{
title:"12. Your Questions 🤔",
text:"Even your random questions make me smile.",
type:"image",
src:"images/reasons/questions.jpg"
},

{
title:"13. Your Waist 🤫",
text:"I love the way it make me feel when i touch it.",
type:"image",
src:"images/reasons/waist.jpg"
},

{
title:"14. Your Imagination 🌈",
text:"I love dreaming about our future together.",
type:"image",
src:"images/reasons/imagination.jpg"
},

{
title:"15. Your Dedication To Study 📚",
text:"Your hard work inspires me.",
type:"video",
src:"videos/study.mp4"
},

{
title:"16. Your Walk 🚶‍♀️",
text:"I always notice when you walk toward me.",
type:"video",
src:"videos/walk.mp4"
},

{
title:"17. Your Attitude 😌",
text:"Confident, strong and beautiful.",
type:"image",
src:"images/reasons/attitude.jpg"
},

{
title:"18. Your Heart 💖",
text:"You care about Us.",
type:"image",
src:"images/reasons/heart.jpg"
},

{
title:"19. The Happiness You Bring 🌸",
text:"Life is brighter because of you.",
type:"image",
src:"images/reasons/happiness.jpg"
},

{
title:"20. Simply Because You're You ❤️",
text:"You're my favorite person in the world.",
type:"video",
src:"videos/you.mp4"
}

];


let currentReason = 0;


function nextReason(){

    const card = document.querySelector(".reason-card");

    card.classList.add("reason-fade");

    setTimeout(() => {

        currentReason++;

        if(currentReason >= reasons.length){

            document.getElementById("reasons").classList.remove("active");
            document.getElementById("letter").classList.add("active");

typeLetter();

            confetti({
                particleCount:200,
                spread:120
            });

            return;
        }

        const reason = reasons[currentReason];

        document.getElementById("reasonTitle").innerText =
        reason.title;

        document.getElementById("reasonText").innerText =
        reason.text;

        const mediaDiv = document.getElementById("reasonMedia");

        if(reason.type === "image" || reason.type === "gif"){

            mediaDiv.innerHTML = `
            <img src="${reason.src}" class="reason-media">
            `;

        }

        if(reason.type === "video"){

            mediaDiv.innerHTML = `
            <video class="reason-media" controls autoplay muted>
                <source src="${reason.src}" type="video/mp4">
            </video>
            `;

        }

        card.classList.remove("reason-fade");

    }, 400);

}
function showLoveMessage(){

    alert(
`Whenever you miss me,

remember that I love you,
I think about you every day,
and no distance can change that. ❤️

Forever Yours,
Ankit ❤️`
    );

}

function showFinalSurprise(){

    document.getElementById("letter").classList.remove("active");
    document.getElementById("finalSurprise").classList.add("active");

}
function toggleMusic(){

    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if(music.paused){

        music.play();
        btn.innerHTML = "⏸️ Pause Our Song ❤️";

    }else{

        music.pause();
        btn.innerHTML = "🎵 Our Song ❤️";

    }

}
function typeLetter(){

    const letter = document.getElementById("letterText");

    let i = 0;

    letter.innerHTML = "";

    const typing = setInterval(() => {

        letter.innerHTML += letterContent.charAt(i);

        i++;

        if(i >= letterContent.length){

            clearInterval(typing);

        }

    }, 35);

}
document.addEventListener("mousemove", function(e){

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    const emojis = ["✨","💖","💕","❤️"];

    sparkle.innerHTML =
    emojis[Math.floor(Math.random()*emojis.length)];

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 800);

});
