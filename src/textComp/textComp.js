import React from 'react';
import VerticalLinearStepper from './stepperComp'

class TextComp extends React.Component {
     
    render() {
      
      const backgnd_style = {
        height: '100%',
        backgroundColor: '#ecebe7'
      }

      const font_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '4rem',
        color: '#112f8a'
      }

      const border_style = {
        // borderColor: '#112f8a',
        // borderStyle :'solid',
        // borderWidth : '0px 2px 0px 0px'
      }

      return (
        <div className='d-flex flex-row col-12 justify-content-around mt-5' style={backgnd_style}>
           <div className='d-flex m-5 flex-row col-4 justify-content-center align-items-center' style={border_style}>
               <span style={font_style}>Education</span>
           </div>
           <div className='d-flex flex-column col-8 justify-content-center align-items-center'>
           <VerticalLinearStepper />   
           </div>
        </div>
      );
    }
  }

 export default TextComp