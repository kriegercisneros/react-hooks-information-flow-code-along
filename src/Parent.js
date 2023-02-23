import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {

  const randomColor = getRandomColor();
  //State is updated here in Parent Component when a Child Component is clicked.  
  //This is possible because we are passing a function as a prop 
  //inside the declaration of ChildComponent
  const [color, setColor] = useState(randomColor);

  //We are storing the color of Child in the state of Parent.  This allows
  //both ChildComponents to access the data, since information flows 
  //unidirectionally 
  const [childrenColor, setChildrenColor] = useState("#FFF");

  //we need to pass in newChildColor as an argument to handleChangeColor. 
  //QUESTION: I am not clear on where newChildColor comes from.   
  function handleChangeColor(newChildColor){
    //declaring a new variable to equal the call to make a random color
    //QUESTION: why can't I use randomColor here?  Why do I need to 
    //create a new variable instead of referencing the local variable outside 
    //of handleChangeColor, which resides in the global memory of Parent 
    //function?  Is it because handleChangeColor is a callback function
    //that is used elsewhere, such as wen we pass it as a prop to the declaration
    //of ChildComponent?
    const newRandomColor = getRandomColor();
    //setColor is the callback function when we call useState.
    //When we reference our constant newRandomColor that equals the evaluated 
    //result of calling {getRandomColor} from the randomColorGenerator component,
    //we are averting a stale closure
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }
    return (
      <div className="parent" style={{ backgroundColor: color }}>
        {/* Child Component is called and has a prop passed in (handleChangeColor 
        here, onChangeColor inside the ChildComponent, that is equal to the 
        evaluated result of calling handleChangeColor */}
        <Child color={ childrenColor } onChangeColor={handleChangeColor} />
        <Child color={ childrenColor } onChangeColor={handleChangeColor} />
        {/* Now the attribute color (which will be a prop inside the ChildComponent), 
        is equal to the evaluated result of calling setChildrenColor.  This 
        information is accessable in Child Component */}
      </div>
    );
  }

export default Parent;
