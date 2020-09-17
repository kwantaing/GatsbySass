import React from "react"
// import classes from "./Person.module.css"
// import "../../../scss/global.scss"

const Person = props => {

  // class="Person a b c "
  // let divClasses = [classes.Person,classes.odd];
  // if(props.person.age % 2 !==0){
  //   divClasses.push(classes.odd);
  // }else{
  //   divClasses.push(classes.even);
  // }
  
  
  let divClasses = ["Person"]
  if(props.person.age % 2 !==0){
    divClasses.push("odd");
  }else{
    divClasses.push("even");
  }

  return (
    <div className={divClasses.join(" ")}>
      <p>
        I'm {props.person.name} and I am {props.person.age} years old.
      </p>
      {/* <button className={classes.btnClass}onClick={props.clicked}>Birthday!</button> */}
      <button className="btnClass"onClick={props.clicked}>Birthday!</button>
    </div>
  )
}

export default Person;