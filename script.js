let heading = document.querySelector("h1");
let buttoms = document.querySelector("p");
let  resultHeading = document.querySelector("h2")

class Question {
    constructor(){
        this.num1 = this.getRandomInt(50);
        this.num2 = this.getRandomInt(50);
        this.answars =  [] ;
        this.getAnswers();
        this.question = `${this.num1} + ${this.num2}`
    }
    getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

    getAnswers() {
        this.answars.splice(0, buttoms.lenght);
        this.correctIndex = this.getRandomInt(buttoms.lenght);
        for(let i = 0; i < buttoms.lenght; i += 1){
            if (i === this.correctIndex) {
                this.correct = this.num1 + this.num2;
                this.answars.push(this.correct);
            } else{
                this.answars.push(this.getRandomInt(100));
            }
        }
    }

    getQuestion(){
        this.num1 = this.getRandomInt(50);
        this.num2 = this.getRandomInt(50);
        this.question = `${this.num1} + ${this.num2}`;
    }
 display () {
heading.innerHTML = this.question;
for ( let i=0; i<this.answars.lenght; i+= 1) {
buttoms[i].innerHTML = this.answars[i];
}
    }
}

let quest1 = new Question();

quest1.display();

for ( let i=0; i<buttoms.lenght; i+= 1) {
    buttoms[i].addEventListener ("click", checkAnswer(i));
    }

function checkAnswer(item) {
        return function() {
        if (buttoms[item].innerHTML === String(quest1.correct)) {
           resultHeading ='правильно!';
        } else {
            resultHeading ='неправильно';  
        }
        quest1.getQuestion();
        quest1.getAnswers();
        quest1.display();
    }
 }
