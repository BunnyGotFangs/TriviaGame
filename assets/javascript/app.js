//Define the needed variables for the game
// console.log ('is html reading me')
$(document).ready(function() 
// declare needed variable for the game
{
//something to start the game    
    var start;
// 
    var gameHTML;
// counter to answer questions == 10 seconds like on HQ   
    var timer = 10;
//list of questions (12 from easy to hard)-- trying a multitier array object
    var questions = [   "Which animal has 4 legs?",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""];
//answers to the questions again trying the multi-tier array object    
    var answers = [ ["Fish", "Bird", "Horse", "Fly"], 
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [], ];
 // list of the right answers  
    var rightResponse = [   "Horse",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",   ];
// countdown on each question
    var qaCounter = 0;
// how to capture answer clicks    
    var answerButton;
//clock   
    var ticToc;
//wht you missed last time, place holder of totals    
    var rightTotal = 0;
    var wrongTotal = 0;
    var otherTotal = 0;
//images for answer if time permits
    var answerImages = ["img class='center-block img-right' src='images/equine.jpg'>"];    
// if you can get sounds to play    
    var click = new Audio("");

// Provide instructions for game play, add to READ ME

alert("This is a timed game.");
alert("There are 12 questions in total.");
alert("Questions get progressively harder as the game proceeds.");
alert("You have 10 seconds to answer each question.");
alert("When the 10 seconds are up the game will move to the next question.");
alert("Read the question and select the correct answer.");
alert("Game ends either when time runs out or you have answered all 12 questions.");
alert("Click the Green LET'S GIDDY UP button to get started.");


$(document).ready(function() 

{
    // Create a function that adds the start button to the game
    //Cannot figure out the centering
    function addStartButton() 
    {
        startup = "<button type=\"button\" class=\"btn btn-success\">Let's Giddy Up</button>";
        $(".mainArea").html(startup);
    }
    
    addStartButton();
})
})