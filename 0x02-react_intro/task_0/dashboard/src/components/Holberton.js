import React from 'react'
import logo from '../holberton-logo.jpg'

export default function Holberton() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App.H1"> School dashboard</h1>
        </header>
        <body className="App-body">
          <p>
            Login to access the full dashboard
          </p>
        </body>
        <footer className="App-footer">
          <p>
            Copyright 2020 - holberton School
          </p>
        </footer>
      </div>
    );
}