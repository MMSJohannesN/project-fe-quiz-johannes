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

    if (fragenrundenummer === 2 && chosenAnswer !== "AAAAA") {
        //Zweite Quizfrage

        document.getElementById("question").innerHTML = fragerunde[1].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[1].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[1].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[1].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[1].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 3 && chosenAnswer !== "AAAAA") {
        //Dritte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[2].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[2].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[2].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[2].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[2].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 4 && chosenAnswer !== "AAAAA") {
        //Vierte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[3].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[3].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[3].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[3].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[3].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 5 && chosenAnswer !== "AAAAA") {
        //Fünfte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[4].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[4].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[4].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[4].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[4].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 6 && chosenAnswer !== "AAAAA") {
        //Sechste Quizfrage
        document.getElementById("question").innerHTML = fragerunde[5].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[5].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[5].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[5].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[5].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 7 && chosenAnswer !== "AAAAA") {
        //Siebte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[6].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[6].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[6].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[6].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[6].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 8 && chosenAnswer !== "AAAAA") {
        //Achte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[7].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[7].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[7].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[7].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[7].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 9 && chosenAnswer !== "AAAAA") {
        //Neunte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[8].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[8].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[8].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[8].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[8].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer === 10 && chosenAnswer !== "AAAAA") {
        //Zehnte Quizfrage
        document.getElementById("question").innerHTML = fragerunde[9].question;
        
        document.getElementById("answer1").innerHTML = fragerunde[9].answer1;
        document.getElementById("answer2").innerHTML = fragerunde[9].answer2;
        document.getElementById("answer3").innerHTML = fragerunde[9].answer3;
        document.getElementById("answer4").innerHTML = fragerunde[9].answer4;
        chosenAnswer = "AAAAA";
    } else if (fragenrundenummer > 10 && chosenAnswer !== "AAAAA") {

        answer1.parentNode.removeChild(answer1);
        answer2.parentNode.removeChild(answer2);
        answer3.parentNode.removeChild(answer3);
        answer4.parentNode.removeChild(answer4);
        nextbutton.parentNode.removeChild(nextbutton);

        document.getElementById("question").innerHTML = "Your results:";
        // TH
        let th = document.getElementById("myTh1");
        let thText = document.createTextNode("Your result is:");
        th.appendChild(thText);
        th = document.getElementById("myTh2");
        thText = document.createTextNode("Your choice was:");
        th.appendChild(thText);
        th = document.getElementById("myTh3");
        thText = document.createTextNode("The solution is:");
        th.appendChild(thText);
        // TB
        let falsch = 0;
        let booleanResult = fragerunde[0].chosen === fragerunde[0].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd1").style.color = "red";
        } else {
            document.getElementById("myTd1").style.color = "LawnGreen";
        }
        let td = document.getElementById("myTd1");
        let tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd2");
        tdText = document.createTextNode(fragerunde[0].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd3");
        tdText = document.createTextNode(fragerunde[0].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[1].chosen === fragerunde[1].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd4").style.color = "red";
        } else {
            document.getElementById("myTd4").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd4");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd5");
        tdText = document.createTextNode(fragerunde[1].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd6");
        tdText = document.createTextNode(fragerunde[1].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[2].chosen === fragerunde[2].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd7").style.color = "red";
        } else {
            document.getElementById("myTd7").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd7");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd8");
        tdText = document.createTextNode(fragerunde[2].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd9");
        tdText = document.createTextNode(fragerunde[2].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[3].chosen === fragerunde[3].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd10").style.color = "red";
        } else {
            document.getElementById("myTd10").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd10");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd11");
        tdText = document.createTextNode(fragerunde[3].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd12");
        tdText = document.createTextNode(fragerunde[3].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[4].chosen === fragerunde[4].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd13").style.color = "red";
        } else {
            document.getElementById("myTd13").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd13");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd14");
        tdText = document.createTextNode(fragerunde[4].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd15");
        tdText = document.createTextNode(fragerunde[4].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[5].chosen === fragerunde[5].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd16").style.color = "red";
        } else {
            document.getElementById("myTd16").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd16");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd17");
        tdText = document.createTextNode(fragerunde[5].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd18");
        tdText = document.createTextNode(fragerunde[5].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[6].chosen === fragerunde[6].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd19").style.color = "red";
        } else {
            document.getElementById("myTd19").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd19");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd20");
        tdText = document.createTextNode(fragerunde[6].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd21");
        tdText = document.createTextNode(fragerunde[6].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[7].chosen === fragerunde[7].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd22").style.color = "red";
        } else {
            document.getElementById("myTd22").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd22");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd23");
        tdText = document.createTextNode(fragerunde[7].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd24");
        tdText = document.createTextNode(fragerunde[7].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[8].chosen === fragerunde[8].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd25").style.color = "red";
        } else {
            document.getElementById("myTd25").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd25");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd26");
        tdText = document.createTextNode(fragerunde[8].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd27");
        tdText = document.createTextNode(fragerunde[8].result);
        td.appendChild(tdText);
        booleanResult = fragerunde[9].chosen === fragerunde[9].result;
        if (booleanResult === false) {
            falsch += 1; 
            document.getElementById("myTd28").style.color = "red";
        } else {
            document.getElementById("myTd28").style.color = "LawnGreen";
        }
        td = document.getElementById("myTd28");
        tdText = document.createTextNode(booleanResult);
        td.appendChild(tdText);
        td = document.getElementById("myTd29");
        tdText = document.createTextNode(fragerunde[9].chosen);
        td.appendChild(tdText);
        td = document.getElementById("myTd30");
        tdText = document.createTextNode(fragerunde[9].result);
        td.appendChild(tdText);

        let output = 10 - falsch;
        let paragraph = document.getElementById("paragraph");
        let paragraphText = document.createTextNode(`You had ${output} answers right!`);
        paragraph.appendChild(paragraphText);

        if (output <= 3) {
            let div1 = document.getElementById("div1");
            let div1Text = document.createTextNode("You were very bad :D");
            div1.appendChild(div1Text);
        } else if (output <= 7) {
            div1 = document.getElementById("div1");
            div1Text = document.createTextNode("You were not good bad also not bad :P");
            div1.appendChild(div1Text);
        } else if (output <= 9){
            div1 = document.getElementById("div1");
            div1Text = document.createTextNode("You are very good!");
            div1.appendChild(div1Text);
        } else {
            div1 = document.getElementById("div1");
            div1Text = document.createTextNode("You are the BEST!!!");
            div1.appendChild(div1Text);
        }
        chosenAnswer = "AAAAA";
   } else {
    alert("You have to chose a value!");
    fragenrundenummer -= 1;
   }
}

let chosenAnswer = "AAAAA";
// Get Value and match it if it´s right or wrong and save it in the background
answer1Chosen = document.getElementById('answer1');
answer1.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer1").value = fragerunde[i].answer1;
    chosenAnswer = fragerunde[i].answer1;
    fragerunde[i].chosen = chosenAnswer;
}

answer2Chosen = document.getElementById('answer2');
answer2.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer2").value = fragerunde[i].answer2;
    chosenAnswer = fragerunde[i].answer2;
    fragerunde[i].chosen = chosenAnswer;
}

answer3Chosen = document.getElementById('answer3');
answer3.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer3").value = fragerunde[i].answer3;
    chosenAnswer = fragerunde[i].answer3;
    fragerunde[i].chosen = chosenAnswer;
}

answer4Chosen = document.getElementById('answer4');
answer4.onclick = function getValue() {
    let i = fragenrundenummer -1;
    document.getElementById("answer4").value = fragerunde[i].answer4;
    chosenAnswer = fragerunde[i].answer4;
    fragerunde[i].chosen = chosenAnswer;
}







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