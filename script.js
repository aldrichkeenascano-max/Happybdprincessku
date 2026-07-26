/* ===========================
   FLOATING HEARTS
=========================== */


function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "❤";


    heart.style.left = Math.random() * 100 + "%";


    heart.style.fontSize = 
    Math.random() * 20 + 15 + "px";


    heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";


    document.querySelector(".hearts")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);


}



setInterval(createHeart,2000);






/* ===========================
   SMOOTH LETTER OPEN
=========================== */


const button = document.querySelector(".btn");


button.addEventListener("click", function(e){


    e.preventDefault();


    const letter = document.querySelector("#letter");


    letter.scrollIntoView({

        behavior:"smooth"

    });



});







/* ===========================
   SCROLL REVEAL EFFECT
=========================== */


const sections = document.querySelectorAll(
".letter-section, .message-section, footer"
);



function reveal(){


    sections.forEach(section=>{


        const windowHeight =
        window.innerHeight;


        const top =
        section.getBoundingClientRect().top;



        if(top < windowHeight - 100){


            section.style.opacity="1";

            section.style.transform="translateY(0)";


        }


    });


}





sections.forEach(section=>{


    section.style.opacity="0";


    section.style.transform=
    "translateY(50px)";


    section.style.transition=
    "1s ease";


});



window.addEventListener(
"scroll",
reveal
);



reveal();