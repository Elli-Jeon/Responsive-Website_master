/* Fetch api*/
/* 1차 시도 : 너무 길다.
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
    
    const questionContainer = document.querySelector(".question-container");

    questionContainer.innerText = jsonData.qustionList[10].q;

    console.log(jsonData.questionList[1].q); // 여기서 작업
} // send data to ejs

sendData();

*/
/*
2차 시도 : then으로 하니 되네?
fetch("../data/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const questionContainer = document.querySelector(".question-container");
        questionContainer.innerText = data.questionList[1].q;
    })
*/
// 3차 시도: async awiat으로 다시 정리

const makeQuestion = (data, idxNum, answer) => {
    const questionContainer = document.querySelector(".question-container");

    questionContainer.innerText = data.questionList[idxNum].q;

    const answerContainer = document.querySelector(".answer-container");
    
    let button;
    for(let i = 0; i < 2; i++){
        button = document.createElement('button');
        button.innerText = data.questionList[idxNum].a[i].answer;
        answerContainer.appendChild(button);
        button.classList.add("answer-button");
        button.addEventListener('click', ()=>{
            let type = data.questionList[idxNum].a[0].type;
            answer[type]++;
        
            document.querySelectorAll(".answer-button").forEach((btn)=>btn.remove()); // 쓴거는 바로 지워줌.
            makeQuestion(data, ++idxNum, answer);    
        }) // 버튼 두개에 둘 다 listener 달아주기 위함.
    }
    return answer
}    



const getData = async () => {
    let response = await fetch("../data/data.json");
    let data = await response.json();
    console.log(data);
    
    let answer = {
        E : 0,
        I : 0,
        S : 0,
        N : 0, 
        T : 0,
        F : 0,
        J : 0,
        P : 0,
    };
    let idxNum = 0; 
    

    makeQuestion(data, idxNum, answer);
;


    console.log(answer);
    


    
    //console.log(answer);

 

}

getData();

/* END. Fetch api*/