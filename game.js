var userClickedPattern=[];
var gamePattern=[];
var count=1;
var level="Level "+count;
$(document).on("keypress", function(){
    $("h1").text(level);
    nextSequence();
    userClickedPattern=[];
});
var buttonColors=["red","blue","green","yellow"];

function nextSequence(){
    var randomNumber=Math.floor((Math.random()*4));
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level="level "+count;
    count++;
    if(randomChosenColor==="green")
        {  
            $("#green").fadeOut(100).fadeIn(100);    
        }
        else if(randomChosenColor==="red"){
                $("#red").fadeOut(100).fadeIn(100);
            }
        else if(randomChosenColor==="blue"){
                $("#blue").fadeOut(100).fadeIn(100);
                }
        else{
                $("#yellow").fadeOut(100).fadeIn(100);
            }
        }
        
        $("button").on("click", function(event){
        handler(event);
        playSound(event);
        checkAnswer();
        animatePress(event);
        });
        
        function handler(event){
            var userChosenColor=event.target.id;
            userClickedPattern.push(userChosenColor);
        
        }
        
        function playSound(event){
            var button=event.target.id;
            var audio=new Audio("Simon Game Challenge Starting Files/sounds/"+button+".mp3");
            audio.play();
        }
        
        function animatePress(event){
            
                var type=event.target.id;
                if(type==="green"){
                $("#green").addClass("pressed");
                setTimeout(function(){
                $("#green").removeClass("pressed");
                }, 100); 
            }
                else if(type=="red"){
                    $("#red").addClass("pressed");
                setTimeout(function(){
                $("#red").removeClass("pressed");
                }, 100); 
                }
                else if(type=="blue"){
                $("#blue").addClass("pressed");
                setTimeout(function(){
                $("#blue").removeClass("pressed");
                }, 100); 
                }
                else{
                    $("#yellow").addClass("pressed");
                setTimeout(function(){
                $("#yellow").removeClass("pressed");
                }, 100); 
            }
        }

function checkAnswer(){
var wrong=new Audio("Simon Game Challenge Starting Files/sounds/wrong.mp3");
var len=userClickedPattern.length;
if(userClickedPattern[len-1]!==gamePattern[len-1]){
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    startOver();
}
}

function startOver(){
count=1;
$("h1").text("Press a Key To Start");
level="level "+count;
gamePattern=[];
userClickedPattern=[];
}
