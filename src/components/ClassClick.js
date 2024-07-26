import React, { Component } from 'react'

class ClassClick extends Component {
    clickHnadler(){
        console.log('Button is Clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHnadler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
