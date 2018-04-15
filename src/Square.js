import React, { Component } from 'react';

class Square extends Component {
  render() {
    const square = {
      height: '100px',
      width: 'auto',
      backgroundColor: 'rgb(101, 135, 254)',
      marginLeft: '5px',
      textAlign: 'center',
      borderRadius: '10px'
    }

    const text = {
      textAlign: 'center',
      paddingTop: '30px',
      fontSize: '2rem',
      textTransform: 'uppercase',
      color: 'white'
    }

    return (
      <div style={square}>
        <div style={text}>
          {this.props.number}
        </div>
      </div>
    );
  }
}

export default Square;
