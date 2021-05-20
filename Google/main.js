const wrapper = document.querySelector(".wrapper");
const searchBox = document.querySelector(".search_box");
const searchBar = searchBox.querySelector("input");
const dropdown = document.querySelector(".dropdown");

searchBar.addEventListener('focus', (e)=>{
    console.log(wrapper.classList)
    dropdown.classList.toggle("wrapperopen");
    wrapper.classList.toggle("open");
    searchBox.classList.toggle("hidden");
})