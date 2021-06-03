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

/* Fetch api*/

const getFile = async () => {
    const response = await fetch("../data/data.json");
    //console.log(response);
    if(response.ok){ // true
        const data = await response.json();
        //console.log(data);
        return data;
    } else {
        throw Error("No File!");
    }
} // fetch data

const sendData = async () => {
    let jsonData = await getFile(); // 밖에서 동기적으로 데이터 빼내가지 말고 여기서 비동기적으로 작업 끝내기
    console.log(jsonData); // 여기서 작업
} // send data to ejs

sendData();

/* END. Fetch api*/