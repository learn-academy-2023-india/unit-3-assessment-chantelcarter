import React from "react"


// i believe that hand is not defined because there are no props to pass over the information from App.js
const Card = (props) => {
  return (
    <div className="handStyles">
      {props.hand.map((card, index) => {
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}

// there's no export so the error: ----> export 'default' (imported as 'Card') was not found in './components/Card' (module has no exports) <---- so need to put an export
export default Card