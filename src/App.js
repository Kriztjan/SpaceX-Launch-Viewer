import React, { Component } from 'react';
import './App.css';

// comonpents
import Nav from './components/Nav/Nav'

class App extends Component {

  constructor() {
    super()
    this.state = {
      // set to the about page by default
      // 0=roadster
      // 1=launches
      // 2=launch bookings
      // 3=about
      page: 3
    }
  }

  loadPage = page => {
    this.setState({ page })
  }

  render() {
    return (
      <div>
        {/* <Nav 
          page={this.state.page}
          loadPage={this.loadPage}
        /> */}


      </div>
    );
  }
}

export default App;
