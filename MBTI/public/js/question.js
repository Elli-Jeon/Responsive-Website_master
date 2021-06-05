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
}
/* END. Fetch api*/

/*Make question and answer part*/

const makeQuestion = (data, idxNum, answer) => {
    let questionContainer = document.querySelector(".question-container");

    questionContainer.innerText = data.questionList[idxNum].q;

    let answerContainer = document.querySelector(".answer-container");
    
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
            makeQuestion(data, ++idxNum, answer); //버튼클릭하면 다음 문제, 답 넣어줌.   
        }) // 버튼 두개에 둘 다 listener 달아주기 위함.
    }

    checkResult(data, idxNum, answer);
}   

/*END. Make question and answer part*/

/* Make result part*/

const checkResult = (data, idxNum, answer) => {
    // Progress Bar
    let progressCount = document.querySelector(".progress-count");
    progressCount.textContent = `${idxNum} / 80`;

    let progressBar = document.querySelector(".progress-bar");
    let insideBar = document.querySelector(".inside-bar");
    insideBar.style.width = `${idxNum*1.25}%`;

    
    // Show result
    let questionContainer = document.querySelector(".question-container");
    let answerContainer = document.querySelector(".answer-container");

      
    if(idxNum == 79){
        progressCount.textContent = "80 / 80";
        insideBar.style.width = '100%';
        questionContainer.textContent = "";
        document.querySelectorAll(".answer-button").forEach((btn)=>btn.remove());

        showType(data, answer, answerContainer);
    }
}

const showType = (data, answer, answerContainer) => {
    let resultType = "";
    let resultDesc = ""
    let resultTypeContainer = document.createElement("div");
    let resultDescContainer = document.createElement("div");

    if(answer.I > answer.E){
        resultType += "I"
    } else {
        resultType += "E"
    }
    if(answer.S > answer.N){
        resultType += "S"
    } else {
        resultType += "N"
    }
    if(answer.T > answer.F){
        resultType += "T"
    } else {
        resultType += "F"
    }
    if(answer.J > answer.P){
        resultType += "J"
    } else {
        resultType += "P"
    }
    
    for(let i = 0; i <16; i++){
        if(data.resultsList[i].types == resultType){
            resultDesc = data.resultsList[i].desc;
        }
    }
    resultTypeContainer.textContent = resultType;
    resultDescContainer.textContent = resultDesc;

    answerContainer.appendChild(resultTypeContainer);
    answerContainer.appendChild(resultDescContainer);
}

/* Make result part*/

getData();

