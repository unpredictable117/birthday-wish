const letterContent = `
To My Billlluuuuu ❤️

Dear Archana,

My Love,

Happy Birthday to the most beautiful soul I have ever known. ❤️

I still remember the very first time we met as if it happened yesterday. I remember the way you smiled, the way you looked at me, and how something inside me instantly changed. At that moment, I had no idea that you would become the most important person in my life. Falling in love with you wasn't something I planned—it happened so naturally, so unexpectedly, and so beautifully. Neither of us saw it coming, but I truly believe it was God's plan all along. He knew that our hearts would find each other, that our souls would connect, and that together we would write the most beautiful love story.

Every single day, I thank God for bringing you into my life. Out of all the people in this world, somehow our paths crossed, and that became the greatest blessing I could have ever received. You came into my life when I didn't even realize how much I needed someone like you. You didn't just become my girlfriend—you became my safe place, my peace, my happiness, my strength, and my home.

Thank you... thank you for loving me in ways I never thought I deserved. Thank you for making me realize that I am worthy of love, worthy of happiness, and worthy of being cared for. Before you, I never knew love could feel this comforting, this warm, and this genuine. You make me feel seen, understood, and accepted exactly as I am.

I hope your birthday this year is everything you've ever wished for and so much more because if there's anyone who deserves all the happiness in this world, it's you. I hope life blesses you with endless smiles, success beyond your dreams, good health, peace, and every little thing your heart desires. You deserve the kind of love that makes your heart feel full, the kind of happiness that never fades, and a life filled with beautiful memories.

There are honestly so many things I want to tell you that words don't feel enough. No matter how much I write, I don't think I could ever fully express how much you mean to me. You have become such an important part of my life that I cannot imagine my world without you in it.

Thank you for simply being you. Thank you for your kindness, your patience, your beautiful heart, your understanding, and your unconditional love. Thank you for always believing in me, even when I don't believe in myself. Thank you for standing beside me through every high and every low. Thank you for never making me feel alone.

You know me better than anyone else. You know when I'm pretending to be okay. You know when I'm overthinking. You know exactly how to cheer me up, how to calm me down, and how to make me smile even on my darkest days. Somehow, you always know what I need without me having to say a word, and that's something I'll never stop appreciating.

What do I even call someone like you? You're my best friend, my biggest supporter, my comfort person, my favorite hello, and my hardest bye bye. You're the reason ordinary days become extraordinary. Just knowing you're there makes everything feel easier. Your presence alone makes my life brighter, happier, and more meaningful.

Thank you for accepting every version of me—the good, the bad, the annoying, the emotional, the imperfect me. Thank you for loving me despite my flaws and reminding me that I don't have to be perfect to deserve love. Whenever I feel like I'm not enough, you're always there to remind me of my worth, and I don't think I'll ever be able to thank you enough for that.

Looking back at everything we've been through together, I realize just how strong our love really is. We've laughed until our stomachs hurt, cried together, argued, misunderstood each other, faced difficult times, and celebrated beautiful moments. Our relationship has been a roller coaster, but through every twist and turn, one thing has never changed—we never gave up on each other.

No matter how hard life got, no matter how many challenges came our way, we always found our way back to each other. That's what makes what we have so special. It's not perfect, but it's real. It's built on trust, understanding, patience, forgiveness, and unconditional love. Every obstacle we've overcome has only made our bond stronger.

I admire you so much. I admire your strength, your determination, your kindness, your intelligence, and the way you care for the people you love. You have such a beautiful heart, and everyone around you is lucky to know you. I'm so incredibly proud of everything you've achieved and everything you're going to achieve because I know you're capable of amazing things.

I promise that no matter what life brings us, I'll always be here cheering for you, supporting you, believing in you, and loving you with everything I have. I want to celebrate every success with you, hold your hand through every challenge, wipe away every tear, and be the reason behind as many of your smiles as I possibly can.

You are the love I've always prayed for without even knowing it. You're the person I want to make memories with, travel with, laugh with, grow with, and spend countless birthdays with. I want to be there for every chapter of your life because my happiest moments are the ones that include you.

I hope this birthday marks the beginning of your happiest year yet. I hope every dream you've been holding onto slowly becomes your reality. I hope your heart is always full, your smile never fades, and your life continues to be filled with endless love and blessings.

Thank you for loving me. Thank you for choosing me every single day. Thank you for making my life so much more beautiful just by being in it.

No matter how many birthdays come and go, my love for you will only continue to grow stronger. Every day I fall in love with you a little more than I did the day before, and I know I'll keep falling for you for the rest of my life.

I love your smile.
I love your laugh.
I love your voice.
I love your heart.
I love your kindness.
I love your little habits.
I love the way you make me feel.
I love every single thing that makes you who you are.

And above all...

I LOVE YOU SO, SO MUCH, BABY. ❤️

Happy Birthday, my love.

Forever yours. ❤️

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
text:"Confident, strong and slaying.",
type:"image",
src:"images/reasons/attitude.jpg"
},

{
title:"18. Your Heart (boobies) 💖",
text:"always soft and warm with plenty os space.",
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
document.addEventListener("DOMContentLoaded", function(){

    const overlay = document.getElementById("introOverlay");
    const text = document.getElementById("overlayText");

    let number = 3;

    setTimeout(()=>{

        const timer = setInterval(()=>{

            text.innerHTML = number;

            number--;

            if(number===0){

                clearInterval(timer);

                text.innerHTML="🎉 Happy Birthday My Lil Baby ❤️";

                confetti({

                    particleCount:300,
                    spread:180,
                    origin:{y:0.6}

                });

                setTimeout(()=>{

                    overlay.style.opacity="0";

                    setTimeout(()=>{

                        overlay.remove();

                    },1000);

                },1800);

            }

        },1000);

    },1500);

});