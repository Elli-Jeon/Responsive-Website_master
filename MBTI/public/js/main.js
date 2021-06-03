document.querySelectorAll('button', 'a').forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
    });
});

// dropdown menu

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownButton = document.querySelector('.dropdown-button');

dropdown.addEventListener('click',(e)=>{
    dropdownContent.classList.toggle('show');
})

dropdownButton.addEventListener('blur',()=>{
    dropdownContent.classList.remove('show');
})// blur : focus가 해제 될 때.

// END. dropdown menu

/* main-content button*/

const nameInput = document.querySelector(".name-input");
const startButton = document.querySelector(".start-button");

const checkNameInput = ()=>{
    console.log(nameInput.textContent);
}

checkNameInput();

nameInput.addEventListener('change',()=>{
    startButton.removeAttribute('disabled');
})
// 안에 내용에 따라 button disabled toggle되는거 하고 싶은뎅

/* END. main-content button*/
