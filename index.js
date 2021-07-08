import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    

    render() {
    const {isLoggedIn} = this.state
    let element;

    // const {isLoggedIn} = this.state
    // let element;

    // element = isLoggedIn ? <HomePage /> : <LoginPage />
    //  return(
    //      <div>
    //          {element}
    //      </div>
    //  )

    // const {isLoggedIn} = this.state
    //  return(
    //      <div>
    //          {isLoggedIn ? <HomePage /> : <LoginPage />}
    //      </div>
    //  )

    // const {isLoggedIn} = this.state
    //  return(
    //      <div>
    //          {isLoggedIn && <HomePage />}
    //      </div>
    //  )

     if(isLoggedIn){
        element = <HomePage />
     }else{
         element = <LoginPage />
     }
     return(
         <div>
             {element}
         </div>
     )
    }
}
export default Conditional;
