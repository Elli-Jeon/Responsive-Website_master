// Common JS
document.querySelectorAll('.watch-control', '.controls a', '/iphoe-btn').forEach(control =>{
    control.addEventListener('click',e=>{
        e.preventDefault();
    })
});

// END. Common JS

// cube

const cube = document.querySelector('.cube');

let x = 0;
let y = 20;
let z = 0;
let flag = 1;

document.querySelector('.top-x-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${Z}deg)`
});

document.querySelector('.bottom-x-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${Z}deg)`
});

document.querySelector('.left-y-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${Z}deg)`
});

document.querySelector('.right-y-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${Z}deg)`
});

document.querySelector('.top-z-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${Z -= 20}deg)`
});

document.querySelector('.bottom-z-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${Z += 20}deg)`
});

const playPause = () => {
    if(flag){
        let interval = setInterval(()=>{
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        },100);
    } else {
        clearInterval(interval);
    }
}

playPause();

document.querySelector('.controls').addEventListener('mouseover',()=>{
    flag = 0;
    playPause();
});

document.querySelector('.controls').addEventListener('mouseout',()=>{
    flag = 1;
    playPause();
});

//END. cube

// SlideShow

const slideshow = document.querySelector('.slideshow');

// add image div 1~5 into slideshow div
for(let i = 1; i <= 5; i++){
    const newDiv = document.createElement('div');
    newDiv.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
    if(i === 1) newDiv.classList.add('change');
    slideshow.appendChild(newDiv);
}

let imageNum = 1;

const slideshowActive = () => {
    setInterval(()=>{
        imageNum++;

        const removeChange = document.querySelector('.slideshow .change');
        removeChange.classList.remove('change');
        
        if(imageNum <= slideshow.childElementCount){
            removeChange.nextElementSibling.classList.add('change');
        } else {
            slideshow.firstElementChild.classList.add('change');
            imageNum = 1;
        }
    },10000)
}

slideshowActive();

// END. SlideShow

// Section-3

const section3Content = document.querySelector('.section-3-content');

window.addEventListener('scroll',(e)=>{
    /*
    console.log(`scrollY:${window.scrollY}, innerheight:${window.innerHeight}`)
    console.log(``)
    */
    console.log(section3Content.getBoundingClientRect());
    
    if(section3Content.getBoundingClientRect().top <= 1400){
        section3Content.classList.add('change');
    }    
})

// END. Section-3

// Section-4



//END. Section-4