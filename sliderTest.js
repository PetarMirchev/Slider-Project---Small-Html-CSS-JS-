const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");


let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}


const prevSlide = () => {
    slider.style.transform = `translateX(-${slideNumber - 2 * 800}px)`;
    slideNumber--;
}


const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1 ;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(${(length - 1) * 800}px)`;
    slideNumber = length ;
}


//******************************************************* */
// right.addEventListener('click', () => {
//     if (slideNumber < length) {
//         nextSlide();
// }  else {
//     firstSlide();
// }
// });


// same as comment logic UP
right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    console.log('right click');
})

//****************************************************************************** */


left.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  console.log('left click');
})


//*********************************************************************************************** */


// za to4kite dolu 
// obhojdame s zikal elemntite (snimkite) i gi pravim ot 'div' na 'button'
for (let i =0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    button.appendChild(div);
}

// create this buttons hear, because if is in top will not work (upper code lines)
const button = document.querySelectorAll(".button");
button[0].style.backgroundColor = "black";

//*************************************************************************************************** */


// function for changing the buttons
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "white";
    });
});