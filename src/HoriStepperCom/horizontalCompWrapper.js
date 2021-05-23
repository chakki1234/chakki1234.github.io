import React from 'react';
import HorizontalLabelPositionBelowStepper from './HoriStepperComp'

class HoriStepperWrap extends React.Component{

    render(){

        const back_gnd_style = {
            height: '100vh',
            backgroundColor: '#ecebe7'
        }

        const head_style = {
            fontFamily: "Roboto Condensed",
            fontSize: '4rem',
            color: '#ed574c'
          }

        return(<div style={back_gnd_style} id='scrollspyProjects' className='d-flex flex-column col-12 align-items-center'>
                    <div className='d-flex flex-row col-10 align-items-center justify-content-center mt-5 mb-5'>
                        <span style={head_style}>Projects...</span>
                    </div>
                    <div className='d-flex flex-row col-10'>
                        <HorizontalLabelPositionBelowStepper projectState={this.props.projectState} ChangeStateFn={this.props.ChangeStateFn}/>
                    </div>

                </div>
        );
    }
}

export default HoriStepperWrap