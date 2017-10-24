$.ajax({
    type: 'POST',
    url: 'http://localhost:3000/twt',
    success: function(data) {
    	console.log(data);
      }
});

function selword(){
random = Math.floor((Math.random()*(lstofwords.length-1))); 
nword = lstofwords[random]; // the word to guess will be chosen from the array above
blkspaces = new Array(nword.length);
numattempts = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < blkspaces.length; i++){
	blkspaces[i] = "_ ";
}
printblkspaces();
}
// prints the guessfield
function printblkspaces(){
	for (var i = 0; i < blkspaces.length; i++){
	var dblkspcs = document.getElementById("dblkspcs");
	var spcs = document.createTextNode(blkspaces[i]);
	dblkspcs.appendChild(spcs);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkLetter = function(){
	var f = document.hgfrm; 
	var b = f.elements["inplet"];
	var ltr = b.value; // the letter provided by the user
	if(!ltr.match(/[a-z]/i))
	{
	     window.alert("Please enter only alphabets");
	     return "";
	}
	ltr = ltr.toUpperCase();
	for (var i = 0; i < nword.length; i++){
		if(nword[i] === ltr){
			blkspaces[i] = ltr + " ";
			var corr = true;
		}

	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var dblkspcs = document.getElementById("dblkspcs");
	dblkspcs.innerHTML=""; 
	printblkspaces();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!corr){
		var incorrectletters = document.getElementById("incorrectletters");
		var origval = incorrectletters.textContent.substring(14);
		origval = origval.replace(/[^a-zA-Z]/g, '');
		if(origval && origval.indexOf(ltr) > -1)
            	{
             		window.alert("Letter already entered");
			return "";
            	}
		var spcs = document.createTextNode(" " + ltr);
		incorrectletters.appendChild(spcs); 
		numattempts++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + numattempts + ".png";
	}
	
	//checks if all letters have been found
	var winflag = true;
	for (var i = 0; i < blkspaces.length; i++){
		if(blkspaces[i] === "_ "){
			winflag = false;
		}
	}
	if(winflag){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(numattempts === 6){
		window.alert("You Lose, please reset the game!");
	}
}
