import React from "react"
import Layout from "../components/Layout/layout"
import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"

const AllCoffeePage = props => {
  const allCoffees = props.pageContext.allCoffees
  const style = { textAlign: `center` }
  return (
    <Layout>
      <div style={style}>
        {allCoffees &&
          allCoffees.map(coffee => {
            return <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>
          })}
      </div>
    </Layout>
  )
}

export default AllCoffeePage
