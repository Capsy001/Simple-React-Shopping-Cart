import React from "react";
import { Component } from "react";
import { login } from "../restcall";
import "./login.css";
import { Link } from "react-router-dom";

export default class Dashboard extends Component
{
    constructor()
    {
      super();
  }
  
  handleLogout =(event) =>
  {
    sessionStorage.setItem('logged', 'false');

    sessionStorage.setItem("loggedName", "NotLogged!");
    sessionStorage.setItem("loggedEmail", "NotLogged!");
    sessionStorage.setItem("loggedRole", "NotLogged!");

    sessionStorage.clear;
    window.location.href = "/";
  }

  GetNav=()=>
  {
    const role=sessionStorage.getItem('loggedRole');

            if(role=="trader"){
              return (
                <div>
            <Link to="/addItems">
              <button className="buttonMargin">Add Items</button>
            </Link>

            <Link to="/editItems">
              <button className="buttonMargin">Edit Items</button>
            </Link>

            <button className="buttonMargin" onClick={this.handleLogout}>
              Logout
                  </button>
                  
                  </div>
              
        );
              
              
            } else if(role=="customer")
            {
              return (<div>
                <Link to="/viewItems">
                  <button className="buttonMargin">View Items</button>
                </Link>

                <Link to="/viewCart">
                  <button className="buttonMargin">View Cart</button>
                </Link>

                <button className="buttonMargin" onClick={this.handleLogout}>
                  Logout
                </button>
                  
              </div>);
            }
  }

  componentWillMount()
  {
    const logged = sessionStorage.getItem('logged');

    if (logged == "false")
    {
      alert("User not logged in!");
      window.location.href = "/";
    }
  }

    render()
    {
        return (
          <div className="loginForm">
            <h2>Dashboard</h2>
            
            <this.GetNav/>

            <hr></hr>
            <h2>Hi {sessionStorage.getItem("loggedName")}</h2>
            <table>
              <tr>
                <th>Name</th>
                <td>{sessionStorage.getItem("loggedName")}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{sessionStorage.getItem("loggedEmail")}</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>{sessionStorage.getItem("loggedRole")}</td>
              </tr>
            </table>
          </div>
        );
    }

}