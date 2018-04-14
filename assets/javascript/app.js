//Define the needed variables for the game
// console.log ('is html reading me')just making sure html file is reading my js
$(document).ready(function() 
// declare needed variable for the game
{
//something to start the game    
    var start;
// reference for getting questions
    var getGame;
// counter to answer questions == 10 seconds like on HQ   
    var timer = 10;
//list of questions (12 from easy to hard)-- trying an array
    var questions = [   "Which animal has 4 legs?",
                        "How many feet does a horse have?",
                        "What is the most common color for a horses eye?",
                        "How do you measuree a horse?",
                        "Which of these is not a style of riding?",
                        "Which of these items is not a grooming tool?",
                        "Which of these is not an equine ailment?",
                        "Which is a breed of horse?",
                        "Which of the following is not a Kentucky Derby Winner?",
                        "What is the latin name for horse?",
                        "Which is not part of a horse?",
                        "What is another animal closely attached to a horse?"];
//multiple choice for the questions again trying the multi-tier array object    
    var answers = [ ["Fish", "Bird", "Horse", "Fly"], 
                    ["0","1","2","3"],
                    ["Black","Blue","Green","Brown"],
                    ["Feet","Hands","Yards","Miles"],
                    ["Western","Saddle Seat","Running Seat","Side Saddle"],
                    ["Mop","Pick","Vaccum","Comb"],
                    ["Laminitus","Thrush","Navicular","Imanottaculous"],
                    ["Amishen","Oldenburg","Dime Horse","Printo"],
                    ["Whose Swooning","War Admiral","I'll Have Another","Mine that Bird"],
                    ["Equinous","Equus","Chappel","Heste"],
                    ["Huck","Gaskin","Hoof","Dock"],
                    ["Mule","Cow","Donkey","Frog"] ];
 // list of the right answers  added the letters to answers to make and exact match to option
    var rightResponse = [   "C) Horse",
                            "A) 0",
                            "D) Brown",
                            "B) Hands",
                            "C) Running Seat",
                            "A) Mop",
                            "D) Imanottaculous",
                            "B) Oldenburg",
                            "A) Whose Swooning",
                            "B) Equus",
                            "A) Huck",
                            "D) Frog"   ];
// used for counting the index of values in array
    var qaCounter = 0;
// how to capture answer click    
    var selectedAnswer;
//question clock   
    var ticToc;
//what you missed last time, place holder of totals  still need to figure out how to get this info on the screen   
    var rightTotal = 0;
    var wrongTotal = 0;
    var otherTotal = 0;
//images for answer if time permits this is test image
  //  var answerImages = "img class='center-block img-right' src='../images/equine.jpg'>";    


// Provide instructions for game play, add to READ ME

alert("This is a timed game.");
alert("There are 12 questions in total.");
alert("Questions get progressively harder as the game proceeds.");
alert("You have 10 seconds to answer each question.");
alert("When the 10 seconds are up the game will move to the next question.");
alert("Read the question and select the correct answer.");
alert("Game ends either when time runs out or you have answered all 12 questions.");
alert("Click the Green LET'S GIDDY UP button to get started.");

//this section is meant to start the trivia game and should activate a start button and then present the questions, selections and then display results to question and game
$(document).ready(function() 

{
    // Create a function that adds the start button to the game
    //Cannot figure out the centering
    function addStartButton() 
    {
        startup = "<button type=\"button\" class=\"btn btn-success\">Let's Giddy Up</button>";
        $(".mainArea").html(startup);
    }
 //this should be the start button above loading to HTML   
    addStartButton();
//console.log("are we getting here") was not getting to this point, but seems to be working now
 //next goting to do an onclick so that when the giddy up button pushed it will call functions. I am not sure I understood completely how to get this work from torturing session   
    $("body").on("click", ".btn-success", function(event)
    {
// so here I have trying to get my questions and answers to load and my timer        
        generateQA();
        timeMe();
    
    }); 

//Now I am on-click in the the answer area and capturing what is selected so I can then determine if it right or wrong or if they didn't answer at all
    $("body").on("click", ".answer", function(event)
    {
//doing an if else statement to capture the selection and compare to the right answer if right then count at a win else it is considered a loss

        selectedAnswer = $(this).text();

        if(selectedAnswer === rightResponse[qaCounter]) 
        {
//if there is an exact match, then clock should wait and question should be counted as a winm calling a function below for processing win
    
            clearInterval(ticToc);
            countWin();
        }
//if not a win then the question should be counted as a loss calling a function below for processing loss
       else 
        {

            clearInterval(ticToc);
            countLoss();
        }
 

    }); 
  // once all the questions have been gone through, then the game needs to get reset. in the video is set not to redo the whole thing, so it will also call a function to resent elements of the game  
    $("body").on("click", ".reset-button", function(event)
    {
        newGame();
    }); 

    // I think I am missing a loop somewhere above to ensure it will go through all questions as with function below alone I am not getting to next question or results
    });  

 // per Tutor functions to go here, try to make small action in each function as it better to trouble shoot  
 // first thing I am going to get to load the time, the questions and the corresponding multiple choices assigning a letter varible to front end and using index to place option next to letter
 function generateQA() 
    {
        getGame = "<p class='text-center timer-p'>TIC TOC, TIC TOC: <span class='timer'>10</span> </p> <p class='text-center'>" + questions[qaCounter] + "</p><p class='answer'>A) " + answers[qaCounter][0] + "</p> <p class='answer'>B) "+answers[qaCounter][1]+"</p> <p class='answer'>C) "+answers[qaCounter][2]+"</p> <p class='answer'>D) "+answers[qaCounter][3]+"</p>";
        $(".mainArea").html(getGame);
    } 
// now i am going to capture correct answers (wins), timer is still reflected and message is displayed
 function countWin() 
    {
     rightTotal++;
     getGame = "<p class='text-center timer-p'>TIC TOC, TIC TOC: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>YOU GOT IT! The Right Answer is: " + rightResponse[qaCounter] + "</p>" //+ answerImages;
     $(".mainArea").html(getGame);
     setTimeout(countDown, 2500); 
    }
 // now i am going to capture incorrect answers(losses), timer is still reflected and message is displayed and trying to display a pile of poo
    function countLoss() 
    {
     wrongTotal++;
     getGame = "<p class='text-center timer-p'>TIC TOC, TIC TOC: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>SERIOUSLY? You Should Have Selected: "+ rightResponse[qaCounter] + "</p>" + "<img class='center-block img-wrong' src='../images/poop.jpg'>";
     $(".mainArea").html(getGame);
     setTimeout(countDown, 2500); 
    }
 // this last one is incase the timer runs out befor an answer is selected.message is displayed and trying to display a pile of poo

 function outtaTime() 
    {
        otherTotal++;
        getGame = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>You're Outta Time & Outta Touch!  The RIGHT answer is: " + rightResponse[qaCounter] + "</p>" + "<img class='center-block img-wrong' src='../images/poop.jpg'>";
        $(".mainArea").html(getGame);
        setTimeout(countDown, 2500);
    }
    
   //timing used for each question, attempting for 10 seconds per questions, when done should show result and let player restart calling yet another function
    function countDown() 
    {
        if (qaCounter < 11) 
        {
            qaCounter++;
            generateQA();
            timer = 10;
            timeMe();
        }
        else 
        {
            gameResults();
        }
    }
 //timer function to set for count down   
    function timeMe() 
    {
        ticToc = setInterval(tenSeconds, 1000);
        function tenSeconds() 
        {
            if (timer === 0) 
            {
                clearInterval(ticToc);
                outtaTime();
            }
            if (timer > 0) 
            {
                timer--;
            }
            $(".timer").html(timer);
        }
    }
  //at conclustion of game the actual place where the results will display and the button to be provided for the restart the button will also call a function  
    function gameResults() 
    {
       getGame = "<p class='text-center'>You Have Finally Reached the End" + "</p>" + "<p class='summary-correct'>What You Know: " + rightTotal + "</p>" + "<p>What You Need to Figure Out: " + wrongTotal + "</p>" + "<p>Time Got the Best of You: " + otherTotal + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-success btn-lg btn-block reset-button' href='#' role='button'>Let's Start Again!</a></p>";
        $(".mainArea").html(getGame);
    }
// user to clear the game 
    function newGame() 
    {
        qaCounter = 0;
        rightTotal = 0;
        wrongTotal = 0;
        otherTotal = 0;
        timer = 10;
        generateQA();
        timeMe();
    }


    
})
