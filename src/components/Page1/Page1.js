import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class Page1 extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <h2>Page 1</h2>
      </div>
    );
  }
}

export default Page1;
