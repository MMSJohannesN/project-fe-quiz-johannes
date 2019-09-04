// You will found the question-database in the data.js file

// Erste Quizfrage -> ist bereits vorselektiert!
document.getElementById("question").innerHTML = fragerunde[0].question;
    
document.getElementById("answer1").innerHTML = fragerunde[0].answer1;
document.getElementById("answer2").innerHTML = fragerunde[0].answer2;
document.getElementById("answer3").innerHTML = fragerunde[0].answer3;
document.getElementById("answer4").innerHTML = fragerunde[0].answer4;

// Alle anderen Fragen bei klick auf den "nächste Frage - Button"
let nextbutton = document.getElementById("nextbutton");
let fragenrundenummer = 1;
nextbutton.onclick = function() {

    fragenrundenummer += 1;

    if (fragenrundenummer === 2) {
        //Zweite Quizfrage

        document.getElementById("question").innerHTML = fragerunde[1].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[1].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[1].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[1].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[1].answer4;
    } else if (fragenrundenummer === 3) {
        //Dritte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[2].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[2].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[2].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[2].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[2].answer4;
    } else if (fragenrundenummer === 4) {
        //Vierte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[3].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[3].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[3].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[3].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[3].answer4;
    } else if (fragenrundenummer === 5) {
        //Fünfte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[4].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[4].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[4].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[4].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[4].answer4;
    } else if (fragenrundenummer === 6) {
        //Sechste Quizfrage
        document.getElementById("question").innerHTML = fragerunde[5].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[5].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[5].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[5].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[5].answer4;
    } else if (fragenrundenummer === 7) {
        //Siebte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[6].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[6].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[6].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[6].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[6].answer4;
    } else if (fragenrundenummer === 8) {
        //Achte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[7].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[7].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[7].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[7].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[7].answer4;
    } else if (fragenrundenummer === 9) {
        //Neunte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[8].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[8].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[8].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[8].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[8].answer4;
    } else if (fragenrundenummer === 10) {
        //Zehnte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[9].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[9].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[9].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[9].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[9].answer4;
    } else {
        let falsch = 0;
        for (let y = 0; y < fragerunde.length; y++) {
            if (fragerunde[y].chosen === fragerunde[y].result) {
                console.log(`Your result is: TRUE! Your choice "${fragerunde[y].chosen}" was right ;)`);
            } else {
                console.log(`Your result is: false. Your choice "${fragerunde[y].chosen}" was wrong. Right answer is "${fragerunde[y].result}".`);
                falsch += 1;
            }
        }
        let output = 10 - falsch;
        console.log(`You had ${output} answers right!`);
        if (output >= 8) {
            console.log("Great Job! You get a 5% discount on MediaMarkt.de for the next 24 hours :)");
        }

        answer1.parentNode.removeChild(answer1);
        answer2.parentNode.removeChild(answer2);
        answer3.parentNode.removeChild(answer3);
        answer4.parentNode.removeChild(answer4);
        nextbutton.parentNode.removeChild(nextbutton);

        document.getElementById("question").innerHTML = "Your results:";

   }
}


// Get Value and match it if it´s right or wrong and do output
answer1Chosen = document.getElementById('answer1');
answer1.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer1").value = fragerunde[i].answer1;
    let chosenAnswer = fragerunde[i].answer1;
    fragerunde[i].chosen = chosenAnswer;
}

answer2Chosen = document.getElementById('answer2');
answer2.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer2").value = fragerunde[i].answer2;
    let chosenAnswer = fragerunde[i].answer2;
    fragerunde[i].chosen = chosenAnswer;
}

answer3Chosen = document.getElementById('answer3');
answer3.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer3").value = fragerunde[i].answer3;
    let chosenAnswer = fragerunde[i].answer3;
    fragerunde[i].chosen = chosenAnswer;
}

answer4Chosen = document.getElementById('answer4');
answer4.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer4").value = fragerunde[i].answer4;
    let chosenAnswer = fragerunde[i].answer4;
    fragerunde[i].chosen = chosenAnswer;
}



/* 
//--------> Wasn´t working anymore after my get value code..... :(
// Select Item with color 
let answer1button = document.getElementById("answer1");
    answer1button.onclick = function() {
    document.getElementById("answer1").style.color = "blue";

    document.getElementById("answer2").style.color = null;
    document.getElementById("answer3").style.color = null;
    document.getElementById("answer4").style.color = null;
}

let answer2button = document.getElementById("answer2");
    answer2button.onclick = function() {
    document.getElementById("answer2").style.color = "blue";
    
    document.getElementById("answer1").style.color = null;
    document.getElementById("answer3").style.color = null;
    document.getElementById("answer4").style.color = null;
}

let answer3button = document.getElementById("answer3");
    answer3button.onclick = function() {
    document.getElementById("answer3").style.color = "blue";

    document.getElementById("answer1").style.color = null;
    document.getElementById("answer2").style.color = null;
    document.getElementById("answer4").style.color = null;
}

let answer4button = document.getElementById("answer4");
    answer4button.onclick = function() {
    document.getElementById("answer4").style.color = "blue";

    document.getElementById("answer1").style.color = null;
    document.getElementById("answer2").style.color = null;
    document.getElementById("answer3").style.color = null;
}
*/



/*
//--------------> Marco´s thing.. don´t know what it is...
// everything with classes.. beginning
class Frage {
    constructor() {
        this.question = question;
    }
    textAuslesen(frageNummer) {

    }
    textDOMEinfügen(DOMNode) {

    }
}

class AntwortMoeglichkeiten {
    constructor() {
        this.answerPossibilities = answerPossibilities;
    }
    textAuslesen(frageNummer) {

    }
    textDOMEinfügen(DOMNode) {

    }
}

class Loesung {
    zeigeRichtigOderFalsch(boolean) {

    }
}

class NaechsteFrage {
    constructor() {
        this.nextQuestion = nextQuestion;
    }
    frageNummer(number) {

    }
}
*/