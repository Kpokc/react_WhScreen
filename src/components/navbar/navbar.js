import React, { Component } from "react";

import './navbar.css'

export default class NavBar extends Component {

    render() {
        
        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary center">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Time Here</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Add
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Delete</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Update</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Log Out</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Radio</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
          </div>
        );
    };
}