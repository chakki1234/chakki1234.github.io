import React from 'react';
import DropDownComp from '../dropDownComp/drop_down';
import ImgComp from '../photoComp/photoComp';
import TextComp from '../textComp/textComp'

class MainComp extends React.Component {
     
  constructor(props) {
    super(props);
    this.changeEduState = this.changeEduState.bind(this)
    this.state = {
      eduState: 0
    }
  }

  changeEduState(index){
    this.setState({
      eduState: index
    })
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
          <DropDownComp name={['About Me', 'Education', 'Internship']} ChangeStateFn = { {'About Me': undefined, Education : this.changeEduState, Internship: undefined} }/> 
          <div className='d-flex flex-row justify-content-center col-4' style={font_style}>
            <span>ANISH</span>
          </div>
          <DropDownComp name={['Projects', 'Contact me']}/>
         </div>
      
      <ImgComp/>
      <TextComp eduState={this.state.eduState} ChangeStateFn = {this.changeEduState} />
      </div>
      );
    }
  }

 export default MainComp