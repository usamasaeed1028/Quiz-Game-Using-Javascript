let questions = [
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
          {a: "Osama Saeed", isCorrect: false},
          {b: "Usama Saeed", isCorrect: true},
          {c: "USSSama Saeed", isCorrect: false}
        ],
        name:'q4'
      },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
      {a: "node js", isCorrect: false},
      {b: "Npm", isCorrect: true},
      {c: "Type Script", isCorrect: false}
    ],
    name:'q1'
  },
  {
    question: "Who invented JS?",
    answers: [
      {a: "Douglas Crockford", isCorrect: false},
      {b: " Sheryl Sandberg" , isCorrect: false},
      {c: "Brendan Eich",  isCorrect: true}
    ],
    name:'q2'

  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
      {a: "ESLint", isCorrect: true},
      {b: "Angular", isCorrect: false},
      {c: "JQuery", isCorrect: false}
    ],
    name:'q3'

  }
];
let form = document.getElementById("form");

questions.forEach(q => {
    let h1 = document.createElement('h1');
    h1.className = "text-white text-2xl my-4 mb-2";
    h1.innerText = q.question;

    let input1 = document.createElement('input');
    input1.setAttribute("type" , "radio");
    input1.setAttribute("name" , q.name);
    input1.id = q.answers[0].a;
    input1.value = q.answers[0].a;
    let result = document.createElement('p');
    result.className = "result"
    result.innerText  ="";


    let span = document.createElement('span');
    span.innerText =q.answers[0].a;
    span.className ="text-black px-1 text-lg cursor-pointer";

    let input2 = document.createElement('input');
    input2.setAttribute("type" , "radio");
    input2.setAttribute("name" , q.name);
    input2.id = q.answers[1].b;
    input2.value = q.answers[1].b;

    let span2 = document.createElement('span');
    span2.innerText = q.answers[1].b;
    span2.className ="text-black px-1 text-lg cursor-pointer";


    let input3 = document.createElement('input');
    input3.setAttribute("type" , "radio");
    input3.setAttribute("name" , q.name);
    input3.id = q.answers[2].c;
    input3.value = q.answers[2].c;

    let span3 = document.createElement('span');
    span3.innerText = q.answers[2].c;
    span3.className ="text-black px-1 text-lg cursor-pointer";


    form.appendChild(h1);
    form.appendChild(input1);
    form.appendChild(span);

    form.appendChild(input2);
    form.appendChild(span2);

    form.appendChild(input3);
    form.appendChild(span3);
    // form.appendChild(result);

});






let btn = document.createElement('button');
btn.innerText = "Submit";
btn.setAttribute("type", "button");
btn.id = "btn";
btn.className = "bg-orange-500 p-2 cursor-pointer rounded";
btn.setAttribute("onclick", "quizGame()");
form.appendChild(btn);



const quizGame = ()=> {



    let scoreCount=0;
   

    


    
    questions.forEach( q => {
        let optopnA  = document.getElementById(q.answers[0].a);
        let optopnB  = document.getElementById(q.answers[1].b);
        let optopnC  = document.getElementById(q.answers[2].c);
  
        if(optopnA.checked){
        

            if(q.answers[0].isCorrect){
                scoreCount++;
                


            }
           
        }
        if(optopnB.checked){

            if(q.answers[1].isCorrect){
                scoreCount++;



            }
        }
        if(optopnC.checked){

            if(q.answers[2].isCorrect){
                scoreCount++;

            }
          
        }

        
            

        
    })
    let score = document.getElementById("score");
    score.className = "block bg-orange-500 w-fit p-4 mx-auto";
    score.innerHTML  = `Your Score: ${scoreCount}/4`;

}



