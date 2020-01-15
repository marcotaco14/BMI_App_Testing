import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

class BMIApp extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);
    this.heightHandle = this.heightHandle.bind(this);
    this.weightHandle = this.weightHandle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.state = {
      Title: "BMI Calculator",
      BMI: "",
      Message: "",
      height: "",
      weight: "",
      BMIClass: "",
      show: "",
      hover: false
    };
  }

  handleMouseIn() {
    this.setState({ hover: true });
  }

  handleMouseOut() {
    this.setState({ hover: false });
  }

  changeHandle(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  heightHandle = heightValue => {
    this.setState({ height: heightValue }, this.handleSubmit);
  };

  weightHandle = weightValue => {
    this.setState({ weight: weightValue }, this.handleSubmit);
  };

  resetHandle = () => {
    this.setstate.Height.value = "";
    this.setstate.Weight.value = "";
  };

  handleSubmit = e => {
    let x = this.state.height.toString().split(".");
    let xx = x.map(Number);
    var final = 12 * xx[0] + xx[1];
    let bmi = ((703 * this.state.weight) / (final * final) - 3).toFixed(2);
    if (bmi < 18.4) {
      this.setState({ Message: "Underweight" });
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      this.setState({ Message: "Healthy" });
    }
    if (bmi > 25 && bmi < 29.9) {
      this.setState({ Message: "Overweight" });
    }
    if (bmi > 30) {
      this.setState({ Message: "Obese" });
    }

    this.setState({ BMI: bmi });
    if (bmi) {
      this.setState({ show: "Your BMI status is: " });
    }
    e.preventDefault();
  };

  render() {
    const toolTip = {
      display: this.state.hover ? "block" : "none"
    };

    return (
      <div>
        <form id="form-cnt">
          <h1 id="title">{this.state.Title} </h1>
          <h3 id="BMI">Body Mass Index: {this.state.BMI} </h3>
          <p id="weight">
            Weight (lb)
            <input
              className="inputs"
              type="number"
              name="weight"
              value={this.state.weightHandle}
              onChange={this.changeHandle}
            />
          </p>
          <p id="height">
            Height (in)
            <input
              className="inputs"
              type="number"
              name="height"
              value={this.state.heightHandle}
              onChange={this.changeHandle}
              onMouseOver={this.handleMouseIn}
              onMouseOut={this.handleMouseOut}
            />
          </p>
          <div
            onMouseOver={this.handleMouseIn}
            onMouseOut={this.handleMouseOut}
          />
          <div className="tool-msg" style={toolTip}>
            Example: If your 5 ft 10 in put 5.10
          </div>
          <div className="btn-cnt">
            <button className="button" onClick={this.resetHandle}>
              <span>Reset</span>
            </button>
            <button
              className="button"
              type="submit"
              id="submit"
              value={this.state.changeHandle}
              onClick={this.handleSubmit}
            >
              <span>Submit</span>
            </button>
          </div>
          <p id="bmi-message">
            {this.state.show} {this.state.Message}
          </p>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BMIApp />, rootElement);
