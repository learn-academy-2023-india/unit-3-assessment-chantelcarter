import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) this is going to make each card randomize by using the arrays "suit" and "rank". so each card drawn will have a different suit and rank every time.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) if the hand drawn is strictly equal to -1 then return an index of the hand arrays randomized by draw.
    // i'm not completely sure why it would have to be equal to -1 but i'm going to look it up
    // chatgpt said this line is checking to see if the value of "draw" isn't present in "hand". and that indexOf is trying to find a specific index, and -1 would mean that the element isn't found. 
    // so in conclusion, it's saying that the condition required is that "draw" is not an index in "hand".
    if (hand.indexOf(draw) === -1) {
      // 3) "setHand" is the behavior of the state hook, so the behavior it's expecting is to take the arrays from "hand" and use the logic from "draw" to make a card.
      setHand([...hand, draw])
      // 4) else if the length of the hand array does not equal 52
    } else if (hand.length !== 52) {
      // 5) return the drawCard function, which will randomize each card from the hand aray.
      drawCard()
      // 6) else, any other situation that happens outside of the above conditions
    } else {
      // 7) return a pop up alert stating that "all cards have been delt."
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^
// i tried looking at the code from when we made the colorbox but that didn't work.
// sakaa and i didn't make it to reseting the tic tac toe board, so i kind of don't really know where to start.
// the firs thing i want to try and do is try and reset the card after they have been drawn.
  const shuffle = () => {
    setHand([])
  }
    // setHand(draw)
    // didn't have the logic inside of the function so nothing was showing up on the page.
    // setHand(hand) <---- doesn't work, probably because i'm just telling it to show the hand and not withdraw it.
    // got some help from tomas. i asked if he made another state hook to get it to work, and then he hinted that i would use whatever is in the usestate to get it to reset, and it ended up working. i am very happy.

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
// my first immediate thought is that the return need empty fragments.