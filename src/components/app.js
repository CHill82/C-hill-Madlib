import React, { Component } from 'react';
import Greeting from './madlib_form'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className= "backgroundSkew">
        <div className="madlib-heading">
         <h1>Bottega Mad Libs</h1>
         <div className=" madlib-subheading">
          Fill out the feilds below and click generate button<br/> to see the Mad Lib Story
          </div>
         </div> 
         <MadlibForm />
        
        </div>
        
      </div>
    );
  }
}
