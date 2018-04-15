import React, { Component } from 'react';
import Square from './Square';

class FizzBuzz extends Component {

  constructor(props){
    super(props);
    this.state = {
      number: 1,
      squares: [1]
    }
    this.addSquare = this.addSquare.bind(this);
    this.reduceSquare = this.reduceSquare.bind(this);
  }

  addSquare(){
    this.setState(state => ({
      number: this.state.number + 1,
      squares: [...this.state.squares, this.state.number + 1]
    }));
  }

  reduceSquare(){
    this.setState(state => ({
      number: this.state.number - 1,
      squares: this.state.squares.slice(0, this.state.squares.length - 1)
    }));
  }

  render() {
    const wrapper = {
      width: '500px',
      height: 'auto',
      display: 'grid',
      gridGap: '10px',
      gridTemplateColumns: 'repeat(3, 1fr)',
      padding: '10px',
      border: '5px solid',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      borderRadius: '20px'
    };

    const buttonsWrapper = {
      textAlign: 'center',
      marginTop: '100px'
    }

    const buttons = {
      backgroundColor: 'white',
      border: '5px solid black',
      borderRadius: '10px',
      padding: '20px',
      marginLeft: '30px',
      cursor: 'pointer',
      fontSize: '2rem',
      textTransform: 'uppercase'
    }

    const squareLists = this.state.squares.map(number => {
      if(number % 3 === 0){
        return <Square number={'fizz'} key={number.toString()}/>
      } else if(number % 5 === 0) {
        return <Square number={'buzz'} key={number.toString()}/>
      } else {
        return <Square number={number} key={number.toString()}/>
      }
    });

    return (
      <div>
        <div style={buttonsWrapper}>
          <span style={buttons} onClick={this.addSquare}>Add</span>
          <span style={buttons} onClick={this.reduceSquare}>Reduce</span>
        </div>
        <div style={wrapper}>
          {squareLists}
        </div>

      </div>
    );
  }
}

export default FizzBuzz;
