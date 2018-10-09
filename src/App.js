import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  state = { name: "" };

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <input
          type="text"
          defaultValue={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

//  pass in what you want from the store
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

//  pass component to connect

// 1. mapStateToProps- receive state of the store

// 2. mapActionsToProps / mapDispatchToProps - allows us to dispatch actions from components
//  easily so we dnt need to dispatch in the components themselves.
//  We can call functions that will auto dispatch to the store
//

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
