import React from "react"

const CoffeeDetail = props => {
  const coffee = props.coffee ? props.coffee : {coffeeImage : '',coffeeType: ''};
  return (
    <div>
      <h3>{coffee.coffeeName}</h3>
      <img src={coffee.coffeeImage.fluid && coffee.coffeeImage.fluid.src} alt=""></img>
      <p>Type of Coffee: {coffee.coffeeType && coffee.coffeeType.coffeeType}</p>
      <p>{coffee.coffeeDescription}</p>
      <p>Rating: {coffee.coffeeRating}</p>
    </div>
  )
}

export default CoffeeDetail
