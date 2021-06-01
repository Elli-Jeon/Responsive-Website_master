document.querySelectorAll('button', 'a').forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
    });
});

// dropdown menu

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click',()=>{
    dropdownContent.classList.toggle('show');
})



// END. dropdown menu