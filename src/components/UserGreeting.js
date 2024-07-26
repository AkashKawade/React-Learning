import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    return this.state.isLoggedIn ?(
        <div>Welcome Akash</div>
    ) : (
        <div>Welcome guest</div>
    )
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Hii Akash</div>
    // } else {
    //     message = <div>Hii guest</div>
    // }
    //  return <div>{message}</div>

    // if (this.state.isLoggedIn){
    //     return <div>Welcome Aka</div>
    // } else {
    //     return <div>Welcome guest</div>
    // }


    // return (
    //   <div>
    //     <div>Welcome Aka</div>
    //     <div>Welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting

