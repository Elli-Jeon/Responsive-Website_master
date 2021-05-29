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
    //console.log(section3Content.getBoundingClientRect());
    
    if(section3Content.getBoundingClientRect().top <= 1400){
        section3Content.classList.add('change');
    }    
})

// END. Section-3

// Section-4
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchControlTop = document.querySelector('.watch-control-top');
const watchControlRight = document.querySelector('.watch-control-right');
const watchControlBottom = document.querySelector('.watch-control-bottom');
const watchControlLeft = document.querySelector('.watch-control-left');

let axisX = 48;
let axisY = 48;

const hideControl = () => {
    if(axisY === -432){
        watchControlTop.style.display = "none";
    } else {
        watchControlTop.style.display = "block";
    }
    if(axisY === 432){
        watchControlBottom.style.display = "none";
    } else {
        watchControlBottom.style.display = "block";
    }
    if(axisX === 432){
        watchControlLeft.style.display = "none";
    } else {
        watchControlLeft.style.display = "block";
    }
    if(axisX === -432){
        watchControlRight.style.display = "none";
    } else {
        watchControlRight.style.display = "block";
    }
} 
/*함수로 밖에 빼주어야 제대로 작동*/
hideControl();

watchControlTop.addEventListener('click',()=>{
    watchCases.style.marginTop = `${axisY -= 96}rem`;
    hideControl();
})

watchControlBottom.addEventListener('click',()=>{
    watchCases.style.marginTop = `${axisY += 96}rem`;
    hideControl();
})

watchControlLeft.addEventListener('click',()=>{
    watchBands.style.marginLeft = `${axisX += 96}rem`;
    hideControl();
})

watchControlRight.addEventListener('click',()=>{
    watchBands.style.marginLeft = `${axisX -= 96}rem`;
    hideControl();
})



//END. Section-4