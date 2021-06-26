const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function() {
      guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
    //   while (!guess >= this.smallestNum || !guess <= this.biggestNum) {
    //       console.log("while")
    //       guess = prompt(`Guess is out of bounds. Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
          // if (guess >= this.smallestNum && guess <= this.biggestNum) {
          //   console.log("while if")
          //   break
          // }
    //     } 
    //   console.log("while loop ended/not initiated")
    //   this.prevGuesses.push(parseInt(guess)) 
    //   console.log("prev guess: ", this.prevGuesses)
    //   } 
    // },
      var breakWhile = [this.smallestNum]
      function numArray(num1, num2) {
        let num = num1
        while (!breakWhile.includes(num2)) {
            num += 1
            breakWhile.push(num)
        }   
        console.log(breakWhile) 
    }
      numArray(this.smallestNum, this.biggestNum)
      while (guess < this.smallestNum || guess > this.biggestNum || isNaN(guess) === true) {
        console.log("while")
        guess = prompt(`Guess is out of bounds. Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
        console.log(guess)
        if (breakWhile.includes(guess)) {
          console.log("while if")
          break
        }
      }
      return parseInt(guess)
    },

      
      //alert("")
    
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      guess = this.getGuess()
      while (guess != this.secretNum) {
        console.log("guess: " + guess + "secret num: " + this.secretNum)
        if (guess == this.secretNum) {
          break
        }
        this.prevGuesses.push(guess) 
        console.log("prev guess: ", this.prevGuesses)
        console.log("guess", guess)
        this.render()
        guess = this.getGuess()
    }
    console.log("play:  guess" + guess + "secretNum" + this.secretNum)
    this.render()
    console.log("end of play")
    },
    render: function() {
      console.log("render:  guess" + guess + "secretNum" + this.secretNum)
      if (guess == this.secretNum) {
        console.log("render if")
        var numGuesses = 0
        for (i = 1; i <= this.prevGuesses.length; i++) {
          numGuesses += 1
        }
        numGuesses +=1
        alert("Congrats! You guessed the number in " + numGuesses + " guesses!")
      } else if (guess > this.secretNum) {
        alert("Your guess is too high. Previous guesses: " + this.prevGuesses.join(", ") + ".")
      } else if (guess < this.secretNum) {
        alert("Your guess is too low. Previous guesses: " + this.prevGuesses.join(", ") + ".")
      }

  }
}
  

game.play()
//console.log("Guess", guess)

  
  //let choice = prompt('Enter a, b or c')

// guess = 5
// console.log(!guess >= 10) 



// if (guess >= this.smallestNum || guess <= this.biggestNum) {
//   this.prevGuesses.push(parseInt(guess)) 
//   console.log("prev guess:", this.prevGuesses)
// } else {
//           while (!guess >= this.smallestNum || !guess <= this.biggestNum) {
//     console.log("if while")
//     guess = prompt(`Guess is out of bounds. Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
// }

// (!guess >= this.smallestNum || !guess <= this.biggestNum) {
//   console.log("if")