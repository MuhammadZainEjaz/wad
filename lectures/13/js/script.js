var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "What is the name of the sweetest candy",
    choices : [ "mingo",
        "chingo",
        "dingo",
        "lingo"],
    correctAnswer : 0
},{
    question : "What is the name of most used toothpaste",
    choices : [ "colgate",
        "colgate herbal",
        "medicam",
        "dr colgate"],
    correctAnswer : 3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion(currentQuestion);
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */
   var n = document.querySelector('input[name="val"]:checked'); // this returns the value of that radio button whose status is checked. NOTE it will pick the first found
    if (n == null)
    { // if no option is selected show a message
        // getelementbyid gets an element in the html file using its id
        document.getElementById("quiz-message").style.display = 'block'; // This is making Quiz message display type block
        document.getElementById("quiz-message").innerText = 'Please Select an answer'; // innerText is used to replace the value of text of that element
        return;
    }
    document.getElementById("quiz-message").style.display = 'none'; // Hiding dquiz message from the screen
    if (n.value == questions[currentQuestion].correctAnswer){ // If the selected 
        correctAnswers++; // correctAnswers count
    }
    if (currentQuestion == questions.length - 1)
    { // if quiz reaches to end
        displayScore(); // calling function to display the score on screen
        document.getElementById("next-btn").innerHTML = "Start Again"; // changing the text of next button to start again button
        currentQuestion=0; // Reseting the quiz
        quizOver = true; // This indicates that quiz is over
        return;
    }
    currentQuestion++; // increment to display the next question
    if (quizOver) // If quiz is over then this will be true
    {
        quizOver = false; // Reseting because to start the quiz again
        resetQuiz();
        document.getElementById("next-btn").innerHTML = "Next Question"; // again changing the value of the button to Next Question
    }
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    /*Write your code here */
    document.getElementById("question").innerHTML = "";
    var ul = document.getElementById("choice-list").innerHTML = "";
    document.getElementById("question").innerText = questions[currentQuestion].question; // We have an element with id question we are changing its text value to the currentQuestion's question
    // on above line questions is a variable having variable which contain different variables like a question and some choices and its 
    var ul = document.getElementById("choice-list");
    for (var i = 0; i < questions[currentQuestion].choices.length; i++){
        var li = document.createElement("li");
        li.innerHTML = "<input type='radio' id=radio-"+i+" name='val' value='"+i+"'>"+questions[currentQuestion].choices[i]+"</input>";
        // +i+ is concatenating previous and next string with value of i(to create distinct buttons everytime) and the next +i+ is assigning different values to every button so that we can distinguish between every button when it is marked checked
        ul.appendChild(li);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}