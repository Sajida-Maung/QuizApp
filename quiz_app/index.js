
const quiz= [
    {
        question:'Which month comes right before June?',
        options:['May','September','July','Agust'],
        answer:0
    },
    {
        question:'The agency that is responsible for protecting the privacy of U.S. consumers is the:',
        options:[ 'FBI','SEC','Department of Homeland Security','FTC'],
        answer:3
    },
    {
        question:'Pen register identifies the numbers dialed for outgoing calls.',
        options:['True','False'],
        answer:0
    },
    {
        question:'Which of the following is an example of intellectual property?',
        options:['a work of art','a computer program','all of the above','a trade secret of an organization'],
        answer:2
    },
    {
        question:'What is a form of protection for intellectual property that does not require any disclosures or the filing of an application.',
        options:['copyright','trade secret','patent','trademark'],
        answer:1
    }

];

const questionNumber = document.querySelector(".question_number");
const questionText = document.querySelector(".question_text");
const optionContainer = document.querySelector(".option_container");

let questionCount = 0;
let currentQuestion;
let avalableQuestion = [];
let avalableOptions = [];

function setAvalableQuestion(){
    const totalQuestion = quiz.length;
    for(let i = 0; i< totalQuestion;i++){
        avalableQuestion.push(quiz[i]);
    }
}
function getNewQuestion(){
    questionNumber.innerHTML = `Question ${questionCount + 1} of ${quiz.length}.`;
    const questionIndex = avalableQuestion[Math.floor(Math.random() * avalableQuestion.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;
  //console.log(questionIndex)
    const index1 = avalableQuestion.indexOf(questionIndex);
    avalableQuestion.splice(index1,1);

   const optionLen = currentQuestion.options.length;
   //push option to avalableOption
   for(let i =0; i<optionLen; i++){
        avalableOptions.push(i);
   }
   let animationDelay = 0.15;
   //creat option in html
   for(let i=0; i<optionLen; i++){
       //random option 
       const optionIndex = avalableOptions[Math.floor(Math.random() * avalableOptions.length)];
       
      //get the postion
       const index2 = avalableOptions.indexOf(optionIndex);
       //remove the optionIndex
       avalableOptions.splice(index2,1);
       //console.log(optionIndex)
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optionIndex];
       option.id = optionIndex;
       option.style.animationDelay = animationDelay + 's';
       animationDelay = animationDelay + 0.15;
       option.className ="option";
       optionContainer.appendChild(option);
       option.setAttribute("onclick","getResult(this)");
   }
    questionCount++;
}
function getResult(element){
    const optionid =parseInt(element.id);
    if( optionid === currentQuestion.answer){
        element.classList.add("correct");
    }else console.log("answer is wrong");
}
function next(){
    if(questionCount === quiz.length){
        console.log('quiz over')
    }else getNewQuestion();

console.log();
}
window.onload = function(){
    setAvalableQuestion();
    getNewQuestion();
}