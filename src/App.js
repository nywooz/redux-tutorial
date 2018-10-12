import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";
import { store } from "./index";

class App extends Component {
  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value);
  }

  getStateBtn(e) {
    console.log(store.getState());
  }

  componentDidMount() {}

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

        <button type="button" className="btn" onClick={this.getStateBtn}>
          Show State
        </button>

        <input
          type="text"
          defaultValue={store.getState().user}
          onChange={this.onUpdateUser.bind(this)}
        />
        {this.props.user}
      </div>
    );
  }
}

//  pass in what you want from the store
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

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
