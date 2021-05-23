import React from 'react';
import VerticalLinearStepper from './stepperComp'

class TextComp extends React.Component {
     
    render() {
      
      const backgnd_style = {
        height: '100vh',
        backgroundColor: '#ecebe7'
      }

      const head_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '4rem',
        color: '#112f8a'
      }

      return (
        <div className='d-flex flex-row col-12 justify-content-around mt-5' style={backgnd_style}>
           <div id='scrollspyEducation' className='d-flex m-5 flex-row col-4 justify-content-center align-items-center' >
               <span style={head_style}>Education...</span>
           </div>
           <div className='d-flex flex-column col-8 justify-content-center align-items-center'>
           <VerticalLinearStepper ChangeStateFn = {this.props.ChangeStateFn} eduState={this.props.eduState}/>   
           </div>
        </div>
      );
    }
  }

 export default TextComp