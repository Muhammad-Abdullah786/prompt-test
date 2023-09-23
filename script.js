let q=[
    {question: "what is 3+4", answer: 6  },
    {question: "what is 12+12", answer: 24  },
    {question: "what is 6 * 10 + 6", answer: 66  },
    {question: "what is 3 * 11", answer: 33  },
    {question: "what is 8 * 9 ", answer: 72  },
]


const test = () => {

let ans;
let score = 0;

    for (i = 0; i < q.length; i++) {
        ans = prompt(q[i].question);
        if(!ans){
            document.write("\n ANSWER THE QUESTION STUPID!!!!!!!!!!!!!!!!!!!!!!!!");
            return;
        }
        if (ans === q[i].answer) {
            score++;
        } 
    }
    
    document.write(" \n YOUR SCORE IS "+score);



    if (score < 3 ){
        document.write(" \n ABE SAALE  Y YOUR SCORE IS  SO LOW???");
    }
    else if(score > 4){
        document.write(" \n ABE SAALE   YOUR SCORE IS  SO HIGH????");
    }
    
}

test();















