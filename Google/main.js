const wapper = document.querySelector(".wrapper");
const searchBox = document.querySelector(".search_box");
const searchBar = searchBox.querySelector("input");
const dropdown = document.querySelector(".dropdown");

searchBar.addEventListener('focus',()=>{
    dropdown.style.display = 'block';
})