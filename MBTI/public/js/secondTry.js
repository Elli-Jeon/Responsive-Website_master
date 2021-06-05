// 기본적인 틀 만들기
const getData = async () => {
    const response = await fetch("../data/data.json");
    let data = response.json();
    return data;
}

const makeQuestion = async (idx) => {
    getData().then((data)=>{
        let questionContainer = document.querySelector('.question-container');
        let question = document.createElement('div');
        question.textContent = data.questionList[idx].q;
        question.style.display = 'none'; //
        questionContainer.appendChild(question);
    })
}

const makeAnswer = async (idx) => {
    getData().then((data)=>{
        //console.log(data);
        let answerContainer = document.querySelector(".answer-container");
        for(let i = 0; i < 2; i++){
            let answerbtn = document.createElement("button");
            answerbtn.textContent = data.questionList[idx].a[i].answer;
            answerbtn.style.display = "none";
            answerContainer.appendChild(answerbtn);
        }

    })
}

for(let i = 0; i < 80; i++){
    makeQuestion(i);
    makeAnswer(i);
}
// END. 기본적인 틀 만들기

const aa = async () => {
    getData().then((data)=>{
        let idx = 0;
        let typeList = {
            I : 0,
            E : 0,
        }
        while(idx < 4){
            let currentQuestion = document.querySelector(".question-container");
            let currentAnswer = document.querySelectorAll(".answer-container button");
            
            currentQuestion.childNodes[idx].style.display = "block";

            for(let i = 2*idx; i < 2*idx+2; i++){
                currentAnswer[i].style.display = "block";
                currentAnswer[i].addEventListener('click',()=>{
                    let type = data.questionList[idx].a[idx%2].type;
                    typeList[type]++;

                })
            }
            idx++;
            console.log(typeList);
        }
    })
}
aa();