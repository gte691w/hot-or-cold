var newGame = function(){
  return (Math.floor(Math.random() * 100) + 1);

}


var evaluateGuess= function(guess){
	var val = parseInt(guess);
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

var greaterThan100 = function(num){

	var number = parseInt(num);
	if(number > 100){
		return true;
	}
	else {
		return false;
	}
}



var varifyRepeat = function(guess, array){
	for(var i = 0; i<array.length; i++){
		if(array[i]===guess){
			return true
		}
		else{
			return false;
		}
	}
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
	$('form #guessButton').on('click',function(){
		var theGuess = $("form #userGuess").val();
		if(theGuess.length > 0){
		 var isGuessAnum = evaluateGuess(theGuess);
		 if(isGuessAnum){
			var tooLarge = greaterThan100(theGuess);
			var isRepeated = varifyRepeat(theGuess, arr);

			if(tooLarge){

				var message = "Must be from 1 to 100";
				$("#feedback").text(message);
				$("#userGuess").val("");
			}


			else if(isRepeated){

				
				repeatMsg = "Do Not Repeat Your Guess"
		  		$("#feedback").text(repeatMsg);
		  		$("form #userGuess").val("");

		  		
			  }
			else{

				arr.push(theGuess);
				var result = guessRange(theGuess,secretNum);
				$("#feedback").text(result);
				$("#userGuess").val("");
				$("#count").text(count);
				count++
				$('<li>'+theGuess+'</li>').appendTo("ul#guessList").hide().slideDown();

			  }

			 }
				
		 else{
			var inform = "Please Enter an Integer"
			$("#feedback").text(inform);
			$("#userGuess").val("");
		   }
		 
		}
		
		else{
			var alertMsg = "Please Enter A Value";
			$("#feedback").text(alertMsg);
			$("#userGuess").val("");

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
  			location.reload();
  	});

  
	

});


