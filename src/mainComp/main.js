import React from 'react';
import DropDownComp from '../dropDownComp/drop_down';
import ImgComp from '../photoComp/photoComp';
import TextComp from '../textComp/textComp'

class MainComp extends React.Component {
     
  constructor(props) {
    super(props);
  }

    render() {

      const font_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '4rem',
        color: '#ed574c'
      }

      return (
      <div className='d-flex col-12 flex-column'>
       
       <div className='d-flex col-12 flex-row justify-content-around align-items-start mt-5'>
          <DropDownComp name1='About Me' name2='Education' name3='Internship'/> 
          <div className='d-flex flex-row justify-content-center col-4' style={font_style}>
            <span>ANISH</span>
          </div>
          <DropDownComp name1='Projects' name2='Contact me'/>
       </div>
      
      <ImgComp/>
      <TextComp />
      </div>
      );
    }
  }

 export default MainComp