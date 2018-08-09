import React, { Component } from "react";
import "./button.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0
    };
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={this.x.bind(this)}>
          <span className="name">{this.props.name}</span>
          {this.state.active === true ? (
            <span
              className="cirle"
              style={{ left: this.state.deltaX, top: this.state.deltaY }}
              onAnimationEnd={this.y.bind(this)}
            />
          ) : (
            ""
          )}
          <span />
        </button>
      </div>
    );
  }
  x(e) {
    let { x, y } = e.target.getBoundingClientRect();
    let { clientX, clientY } = e;
    let deltaX = clientX - x - 5;
    let deltaY = clientY - y - 5;
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    });
    this.props.onClick && this.props.onClick.call(null,'Frank',e)
  }
  y() {
    this.setState({
      active: false
    });
  }
}

export default App;
