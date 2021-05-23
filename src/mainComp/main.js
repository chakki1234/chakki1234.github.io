import React from 'react';
import DropDownComp from '../dropDownComp/drop_down';
import PhotoComp from '../photoComp/photoComp';
import TextComp from '../textComp/textComp';
import ImgTextComp from '../imgCompText/imgCompText';
import ContactComp from '../contactComp/contactComp'
import HoriStepperWrap from '../HoriStepperCom/horizontalCompWrapper'

class MainComp extends React.Component {
     
  constructor(props) {
    super(props);
    this.changeEduState = this.changeEduState.bind(this);
    this.changeInternState = this.changeInternState.bind(this);
    this.changeProjectState = this.changeProjectState.bind(this);
    this.state = {
      eduState: 0,
      internState: 0,
      projectState: 0
    }
  }

  changeEduState(index){
    this.setState({
      eduState: index
    })
  }

  changeInternState(index){
    this.setState({
      internState: index
    })
  }

  changeProjectState(index){
    this.setState({
      projectState: index
    })
  }
   
  render() {

      const main_head_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '4rem',
        color: '#ed574c'
      }

      return (
      <div className='d-flex col-12 flex-column'>
       
       <div className='d-flex col-12 flex-row justify-content-around align-items-start mt-5'>
          <DropDownComp name={['About Me', 'Education', 'Internship']} ChangeStateFn = { {'About Me': undefined, Education : this.changeEduState, Internship: this.changeInternState} }/> 
          <div className='d-flex flex-row justify-content-center col-4' style={main_head_style}>
            <span>ANISH</span>
          </div>
          <DropDownComp name={['Projects', 'Contact me']} ChangeStateFn = { { Projects : this.changeProjectState, 'About me': undefined} }/>
         </div>
      
      <PhotoComp/>
      <TextComp eduState={this.state.eduState} ChangeStateFn = {this.changeEduState} />
      <ImgTextComp internState={this.state.internState} ChangeStateFn={this.changeInternState} />
      <HoriStepperWrap projectState={this.state.projectState} ChangeStateFn={this.changeProjectState}/>
      <ContactComp />
      </div>
      );
    }
  }

 export default MainComp