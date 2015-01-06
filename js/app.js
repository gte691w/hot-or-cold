var newGame = function(){
  return (Math.floor(Math.random() * 100) + 1);

}


var evaluateGuess= function(guess){
	var val = parseFloat(guess);
	if(isNaN(val)){
		return false;
	}
	else if(val%1 !=0) {
		return false;
	}
	else {
		return true;
	}

}

var checkRange = function(num){

	var number = parseInt(num);
	if((number > 100) || (number <= 0)){
		return true;
	}
	else {
		return false;
	}
}



var varifyRepeat = function(guess, array){
	
	for(var i = 0; i<array.length; i++){
		if(array[i]===guess){
			return true;
		}
	}
	return false;
		
	}




var guessRange = function(userGuess,target){
	var guess = parseInt(userGuess);
	if(Math.abs(guess - target) > 50){
		return "Ice Cold"
	}
	else if(Math.abs(guess - target) > 30 && Math.abs(guess - target) <= 50){
		return "Cold"
	}

	else if(Math.abs(guess - target) > 20 && Math.abs(guess - target) <= 30){
		return "Warm"
	}
	else if(Math.abs(guess - target) > 10 && Math.abs(guess - target) <= 20){
		return "Hot"
	}
	else if(Math.abs(guess - target) >= 1 && Math.abs(guess - target) <= 10){
		return "Very Hot"
	}
	else{
		return "You Got It"
	}


}

$(document).ready(function(){
	var secretNum = newGame();
	var count = 1;
	var arr =[];
	$("#userGuess").focus();
	$('form').submit(function(event){
		event.preventDefault();
	});
	$('form #guessButton').on('click',function(){
		var theGuess = $("#userGuess").val();
		if(theGuess.trim().length ===0){
			var alertMsg = "Please Enter A Value";
			$("#feedback").text(alertMsg);
			$("#userGuess").val("");
			return false;
		}
	    var isGuessAnum = evaluateGuess(theGuess);
		if (!isGuessAnum){
		 	var inform = "Please Enter an Integer"
			$("#feedback").text(inform);
			$("form #userGuess").val("");
			$("form #userGuess").focus();
		 }
		else{
			var notInRange = checkRange(theGuess);
			var isRepeated = varifyRepeat(theGuess, arr);

			if(notInRange){

				var message = "Must be from 1 to 100";
				$("#feedback").text(message);
				$("#userGuess").val("");
				$("#userGuess").focus();
			}


			else if(isRepeated){

				
				repeatMsg = "Do Not Repeat Your Guess"
		  		$("#feedback").text(repeatMsg);
		  		$("form #userGuess").val("");
		  		$("#userGuess").focus();
		  		
			  }
			else{

				arr.push(theGuess);
				var result = guessRange(theGuess,secretNum);
				if(result==="You Got It"){
					$("#userGuess").prop('disabled', true);
					$('#guessButton').prop('disabled', true);
				}
				$("#feedback").text(result);
				$("#userGuess").val("");
				$("#count").text(count);
				count++
				$('<li>'+theGuess+'</li>').appendTo("ul#guessList").hide().slideDown();

			  }

		}
				
		

	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").on('click', function(){
  		secretNum = newGame();
  		arr = [];
  		count = 1;
  		$("#feedback").text("Make your Guess!");
  		$("#guessList").children("li").fadeOut(300, function() { $(this).remove().slideUp() });
  		$("#count").text(0);
  		$("#userGuess").prop('disabled', false);
		$('#guessButton').prop('disabled', false);
  		$("form #userGuess").focus();
  		
  	
  		
  	});

  
	

});


