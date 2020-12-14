// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
    // input: 'Sunday', false
    // output: 1
//Example:
    // input: 'Sunday', true
    // output: 7

function daysPosition(day, offset) {
    let dayNum = 0

    switch (day.toLowerCase()) {
        case 'monday':
            // code block
            dayNum = 2
            break;
        case 'tuesday':
            // code block
            dayNum = 3
            break;
        case 'wednesday':
            // code block
            dayNum = 4
            break;
        case 'thurday':
            // code block
            dayNum = 5
            break;
        case 'friday':
            // code block
            dayNum = 6
            break;
        case 'saturday':
            // code block
            dayNum = 7
            break;
        case 'sunday':
            // code block
            dayNum = 1
            break;

        default:
            // code block
            dayNum = -10
    }

    if (dayNum < 0) {
        dayNum = "That's not a day of the week"
    } else if (offset) {
        if (dayNum == 1) {
            dayNum = 7
        } else {
            dayNum--
        }
    }

    return dayNum
}


// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

 function golfScore(score, par) {
    let term = ""
    let x = score - par

    if (score == 1) {
        x = -3
    }

    switch (x) {
        case -3:
            // code block
            term = "Ace"
            break;
        case -2:
            // code block
            term = "Eagle"
            break;
        case -1:
            // code block
            term = "Birdie"
            break;
        case -0:
            // code block
            term = "Par"
            break;
        case 1:
            // code block
            term = "Bogie"
            break;
        case 2:
            // code block
            term = "Double Bogie"
            break;

        default:
        // code block
        term = "Ouch"
    }

    return term
 }
 

// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
    // output: '-5 Hold'
// Example:
    // output: '2 Bet'

let count = 0

function cardCounter(card) {
    let x =""

    switch(card) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          // code block
          count++ 
          break;
        case '7':
        case '8':
        case '9':   
          // code block
          break;
        default:
          // code block
          count--
      }

      if (count > 0){
          x ="Bet"
        } else {
            x = "Hold"
        }

        return count + " " + x
}
