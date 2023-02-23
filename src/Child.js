import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


//onChangeColor prop is passed down from Parent component and is the 
//same function object as handleChangeColor function

//QUESTION: are we destructuring onChangeColor (which is actually 
// handleChangeColor)?

//we are passing in color as props, which is retrieved as useState 
//from the Parent Component 
function Child({ onChangeColor, color }) {
  //QUESTION: where does this handleClick function get it's information?  
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  return (
    <div 
    //we can use onChangeColor prop as an event handler for
    //the child components the Child() function creates.  
    //This means that when the onClick is triggered, 
    //handleChangeColor is called from Parent Component and 
    //applied to Child Component
      onClick = { handleClick }
      //QUESTION: WHY did I change this from onChangeColor to handle
      //click?
      className="child" 
      //before we used state to create backgroundColor, it had a 
      //value pair of '#FFF'.  This made the color static.  By 
      //setting the value equal to the prop from Parent Component, 
      //we are able to use state to set color to both Child Components 
      //simultaneouslly.  
      style={{ backgroundColor: color }} 
    /> 
  );
}

export default Child;
