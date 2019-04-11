// create all of my variables that contain logic for our game
  
  // wins (number)
  var wins=0;
  // losses (number)
  var loss=0;
  // guessesLeft (number)
  var guestLeft= 0
  // lettersAlreadyGuessed (array)
  // computerChoice (string)
  // computerChoicesBank (array of the alphabet)
  var computerChoicesBank = "abcdefghijklmnopqrstuvwxyz".split("");

// create all variables that reference specific parts of the page
  // $wins (document.getElementById("wins"))
  // $losses
  // $guessesLeft
  // $userGuess
  // $computerGuess
  // $lettersAlreadyGuessed

// create a function to start/reset the game
function newGame() {
  // reset important game variables
    // assign computerGuess a new random letter

    // reset the lettersAlreadyGuessed array
    lettersAlreadyGuessed.length = 0;

    // reset guessesLeft back to 10

    // maybe write some information to the page indicating a new game has started
}

document.onkeyup = function(event) {
  // run our logic to check our guess

    // capture user's guess using event.key

    // if userGuess === computerGuess...you win
      // increase wins by 1
      // start a new game newGame()
    // else
      // decrement guessesLeft by 1 (guessesLeft--)
    
    // if guessesLeft === 0...you lose
      // increase losses by 1
      // start a new game newGame()
    
    // add letter guessed to lettersAlreadyGuessed array (using .push())

    // display information to the page
      // write userGuess, computerGuess, guessesLeft, and lettersAlreadyGuessed to the page in their respective locations (which you created references to above)
      
}

// run newGame() to start game for the first time
newGame();

//create a arrow for Alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = alphabet.split("");

var userChoice = documnet.getElementById(userChoice-text)

var computerChoice = document.getElementById (computerChoice)

document.onleys = function(event)



