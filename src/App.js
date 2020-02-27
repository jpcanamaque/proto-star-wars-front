import React from 'react';

import Button from './components/Button'
import ResultView from './components/ResultView'

import 'bulma/css/bulma.css';
import './css/style.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.getInitialState();
    this.setAppState = this.setAppState.bind(this);
  }

  getInitialState()  {
    return {
      longest_crawl : []
      , most_char_appearance: []
      , most_spec_appearance: []
      , most_vehicle_pilot: []
      , isclicked : false
    };
  }

  setAppState (data, isclicked) {
    if(data !== null) {
      this.setState({
        longest_crawl : data[0]
        , most_char_appearance: data[1]
        , most_spec_appearance: data[2]
        , most_vehicle_pilot: data[3]
        , isclicked
      })
    } else {
      this.setState(this.getInitialState());
    }
  }

  render () {
    return (
      <div className = "container is-fluid">
          <section className = "section">
              <img 
                src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" 
                alt = "star wars logo"
              />
          </section>
          <section className = "section">
              <Button setAppState = {this.setAppState} data = {this.state} />

          </section>
          <section className = "section">
              <ResultView results = {this.state}/>
          </section>
      </div>
    );
  }
}

export default App;
