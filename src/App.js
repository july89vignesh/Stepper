import "./styles.css";
import Stepper from "./Components/Stepper";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      skip: false
    };
  }

  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next"
      ? newStep++
      : clickType === "reset"
      ? (newStep = 1)
      : newStep--;
    console.clear();
    if (newStep > 0 && newStep <= 5) {
      this.setState({
        currentStep: newStep,
        skip: "false"
      });
    }
  }

  skip() {
    console.clear();

    const { currentStep } = this.state;
    let newStep = currentStep;
    newStep++;
    if (newStep > 0 && newStep <= 5) {
      this.setState({
        currentStep: newStep,
        skip: "true"
      });
    }
  }

  reset() {
    const { currentStep } = this.state;
    if (currentStep <= 5) {
      this.setState({
        currentStep: 1
      });
    }
  }

  render() {
    const { currentStep } = this.state;
    const { skip } = this.state;
    return (
      <>
        <div className="stepper-container-horizontal">
          <Stepper
            direction="horizontal"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="purple"
            skip={skip}
          />
        </div>

        <div className="buttons-container">
          <button
            className={
              this.state.currentStep > stepsArray.length ? "hidden" : ""
            }
            onClick={() => this.handleClick()}
          >
            Previous
          </button>
          <button
            className={
              this.state.currentStep > stepsArray.length ? "hidden" : ""
            }
            onClick={() => this.handleClick("next")}
          >
            {this.state.currentStep === stepsArray.length ? "Finish" : "Next"}
          </button>
          <button
            className={
              this.state.currentStep > stepsArray.length ? "" : "hidden"
            }
            onClick={() => this.handleClick("reset")}
          >
            Reset
          </button>
          <button
            className={
              this.state.currentStep <= 1
                ? "hidden"
                : this.state.currentStep >= stepsArray.length
                ? "hidden"
                : ""
            }
            onClick={() => this.skip()}
          >
            Skip
          </button>
        </div>
      </>
    );
  }
}

const stepsArray = [
  // "Create your account",
  "Add personal info",
  "Add payment details",
  "Registration complete"
];
