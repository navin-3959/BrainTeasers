

const question = [
    {
        question: 'Which of the following is a markup language ?',
        a: "HTML",
        b: 'CSS',
        c: 'JavaScript',
        d: 'React',
        correct: 'a'
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language hihi",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];
let option = document.querySelectorAll("input[type='radio']")
let index = 0;
let total = question.length

let correct = 0,
    wrong = 0;

const quebox = document.querySelector(".quebox")
const optioninput = document.querySelectorAll(".option")
const loadquestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index]
    console.log(data)
    quebox.innerHTML = `${index + 1}) ${data.question}`;
    optioninput[0].nextElementSibling.innerHTML = data.a
    optioninput[1].nextElementSibling.innerText = data.b
    optioninput[2].nextElementSibling.innerText = data.c
    optioninput[3].nextElementSibling.innerText = data.d
}
const submitquiz = () => {
    const data = question[index]
    const ans = getanswer()
    if (ans === data.correct) {
        correct++
    }
    else {
        wrong++
    }
    index++
    loadquestion()
    return;
}


const getanswer = () => {
    let answer;
    optioninput.forEach(
       (input)=> {
        if (input.checked) {
            console.log(input.value);
           answer=  input.value;
        }

    }
    )
    return answer;
}
const reset = () => {
    optioninput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML =`<h3> Thankyou for playing the quiz </h3>
    <h2> ${correct}/ ${total} are correct </h2>`
}


loadquestion();