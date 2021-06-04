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
    addNumber(data, idxNum, answer);
}

const addNumber = (data, idxNum, answer) => {
    const answerContainer = document.querySelector(".answer-container");
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');

    yesButton.innerText = data.questionList[idxNum].a[0].answer;
    noButton.innerText = data.questionList[idxNum].a[1].answer;

    answerContainer.appendChild(yesButton);
    answerContainer.appendChild(noButton);

    yesButton.addEventListener('click',()=>{
        let type = data.questionList[idxNum].a[0].type;
        answer[type]++;
        answerContainer.removeChild(yesButton); // 여기에 계속 추가되니깐 삭제해주어야.
        answerContainer.removeChild(noButton);
        if(idxNum === 5) {
            console.log(answer);
        }
        makeQuestion(data, ++idxNum, answer);
        // console.log(answer);
    });
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
    
    console.log(answer);

 

}

getData();

/* END. Fetch api*/