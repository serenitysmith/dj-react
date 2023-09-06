import React from 'react'
import Control from './Control.js'

// Define a functional component named "ControlContainer" that takes "props" as its argument
function ControlContainer(props) {
    return (
        <div className = 'Control-container'>
            <Control button = {props.button1}/>
            <Control button = {props.button2}/>
            <Control button = {props.button3}/>
            <Control button = {props.button4}/>
            <Control button = {props.button5}/>
            <Control button = {props.button6}/>
            <Control button = {props.button7}/>
            <Control button = {props.button8}/>
        </div>
    )
}
// Export the ControlContainer component as the default export of this module
export default ControlContainer
// Notes:

// This code defines a functional React component named ControlContainer.
// Functional components in React are simple JavaScript functions that return JSX, describing the structure of the component's UI.
// The ControlContainer component takes a single parameter, props, which is an object containing properties passed to this component when it's used elsewhere in your application.
// Inside the component's JSX, there's a div element with the class name "Control-container." This is the outer container for the control buttons.
// Within the "Control-container" div, there are multiple instances of the Control component being rendered. Each Control component represents a control button with an onClick event handler.
// The button prop of each Control component is set to a corresponding function passed in as a prop to the ControlContainer component. These functions are expected to be defined in the parent component that uses the ControlContainer component.
// The purpose of this component is to provide a container for multiple control buttons, each of which triggers a different function when clicked.
// Finally, the ControlContainer component is exported as the default export of the module, making it available for use in other parts of your application.
// In summary, this code creates a reusable React component named ControlContainer that serves as a container for control buttons. It renders multiple instances of the Control component, each with a different click event handler function passed as a prop.