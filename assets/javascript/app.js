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
    var questions = ["Which animal has 4 legs?",2,3,4,5,6,7,8,9,10,11,12];
//answers to the questions again trying the multi-tier array object    
    var answers = [["Fish", "Bird", "Horse", "Fly"], [], ];
 // list of the right answers  
    var rightResponse = ["Horse"];
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

// Provide instructions for game play

// Game functions here

// per Tutor functions to go here, snaller the better



    
})