import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Asider from "./components/asider";

function save() {
  alert("Hello");
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button name="点我" />
        <Button name="哈哈" />
        <Button name="妈蛋"  onClick={this.zzz.bind(this)}/>
        <Asider />
      </div>
    );
  }
  zzz(xxx,e){
    console.log('外面传过来的信息')
    console.log(xxx)
    console.log(e)
  }
}

export default App;
