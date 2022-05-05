import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default class AddItem extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: "",
      desc: "",
    };
  }

  

  componentWillMount() {
    const logged = sessionStorage.getItem("logged");
    if (logged == "false") {
      alert("User not logged in!");
      window.location.href = "/";
    }
  }

  handleItemName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleDesc = (event) => {
    this.setState({
      desc: event.target.value,
    });
  };

  handleItemPrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="loginForm">
          <h2>Add Items</h2>
          <Link to="/dashboard">
            <button className="buttonMargin">Dashboard</button>
          </Link>

          <Link to="/editItems">
            <button className="buttonMargin">Edit Items</button>
          </Link>

          <Link to="/">
            <button className="buttonMargin">Logout</button>
          </Link>

          <hr></hr>
          <form>
            <div>
              <label>Item Name</label>
              <input type="text" onChange={this.handleItemName}></input>
            </div>
            <div>
              <label>Item Price</label>
              <input type="number" onChange={this.handleItemPrice}></input>
            </div>
            <div>
              <label>Description</label>
              <input type="text" onChange={this.handleDesc}></input>
            </div>

            <button className="buttonMargin">+Add Item</button>
          </form>
        </div>
      </div>
    );
  }
}