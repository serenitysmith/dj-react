import React from "react";
import SquareContainer from "./SquareContainer.js";
import ControlContainer from "./ControlContainer.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    // Initial state of the component
    this.state = {
      colors: ["white", "white", "white", "white"],
      radii: [0, 0, 0, 0],
    };
  }
  // Button event handlers to modify state
  button1 = () => {
     // Clone the colors array
    let newColors = [...this.state.colors];
    // Toggle between 'white' and 'black' for each color
    newColors = newColors.map((color) =>
    // Toggle between 'white' and 'black' for each color
      color === "white" ? "black" : "white"
    );
    return this.setState({
      colors: newColors,
    });
  };
  button2 = () => {
    // Clone the colors array
    let newColors = [...this.state.colors];
    // Toggle between 'purple' and 'white' for the first two colors 
    newColors[0] = newColors[0] === "purple" ? "white" : "purple";
    newColors[1] = newColors[1] === "purple" ? "white" : "purple";
    // Update the state with new colors
    this.setState({
      colors: newColors,
    });
  };
   // ... similar button event handlers for other buttons ...

    // Render method to display the UI
  button3 = () => {
    let newColors = [...this.state.colors];
    newColors[2] = newColors[2] === "blue" ? "white" : "blue";
    this.setState({
      colors: newColors,
    });
  };
  button4 = () => {
    let newColors = [...this.state.colors];
    newColors[3] = newColors[3] === "blue" ? "white" : "blue";
    this.setState({
      colors: newColors,
    });
  };
  button5 = () => {
    let newRadii = [...this.state.radii];
    newRadii[0] = newRadii[0] === 50 ? 0 : 50;
    this.setState({
      radii: newRadii,
    });
  };
  button6 = () => {
    let newRadii = [...this.state.radii];
    newRadii[3] = newRadii[3] === 50 ? 0 : 50;
    this.setState({
      radii: newRadii,
    });
  };
  button7 = () => {
    let newRadii = [...this.state.radii];
    newRadii = newRadii.map((radius) => (radius === 50 ? 0 : 50));
    this.setState({
      radii: newRadii,
    });
  };
  button8 = () => {
    let newColors = [...this.state.colors];
    newColors = newColors.map((color) => {
      switch (color) {
        case "white":
          return "black";
        case "black":
          return "white";
        case "purple":
          return "gold";
        case "gold":
          return "purple";
        case "blue":
          return "red";
        case "red":
          return "blue";
      }
    });
    this.setState({
      colors: newColors,
    });
  };
   // ... similar button event handlers for other buttons ...

    // Render method to display the UI
  render() {
    return (
      <div className="App">
        <SquareContainer colors={this.state.colors} radii={this.state.radii} />
        <ControlContainer
          button1={this.button1}
          button2={this.button2}
          button3={this.button3}
          button4={this.button4}
          button5={this.button5}
          button6={this.button6}
          button7={this.button7}
          button8={this.button8}
        />
      </div>
    );
  }
}
export default App;
// Notes:

// The code is a React component named App that represents the main application.
// It imports two components: SquareContainer and ControlContainer, as well as a CSS file.
// The constructor initializes the initial state of the component with an array of colors and an array of radii, both with default values.
// The component defines several button event handlers (e.g., button1, button2, etc.), which modify the state of the component when triggered.
// Each button event handler creates a copy of the relevant state array (colors or radii), makes necessary modifications, and then updates the component's state using setState.
// The render method displays the UI of the application.
// The SquareContainer component receives the colors and radii state as props and renders colored squares with rounded corners.
// The ControlContainer component receives the button event handlers as props and renders a container with buttons to interact with the app.
// Overall, this code demonstrates a simple React application that allows users to change the colors and radii of squares through button clicks.
