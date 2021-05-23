import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function getSteps() {
  return ['Police CMS', 'Recal UAE', 'Spider Orientation App'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return `Created the backend of the Police CMS app on Node js. The app aims to ease filing FIR’s and
      reviewing the status of the registered complaints.
      The app is for the Tiruchirappalli city police to view complaints, assign police officers to a
      complaint, and update the status of a complaint.
      The primary motivation behind the app is to make the whole process of registering a complaint
      and documenting its progress completely paperless.`;
    case 1:
      return `Constructed the frontend of a website that maintains details of over 400 alumni of NIT
      Tiruchirappalli in UAE.
      Helps to manipulate and organize events, income, expense, sponsor, achievements, and user
      details.
      Built using jQuery, CSS, and HTML.`;
    case 2:
      return `Devised and programmed the frontend of an app using Flutter to monitor and review technical
      projects of over 300 freshers in our college.
      Provides details of the git repositories and commits made by the freshers and has a facility to
      chat with them.
      Published in the Play Store.`;
    default:
      return 'Unknown stepIndex';
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {

    constructor(props){
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.changeStateProps = this.changeStateProps.bind(this);
    }

    handleNext(){
        this.changeStateProps(this.props.projectState + 1) 
       };
    
     
    handleBack(){
        this.changeStateProps(this.props.projectState - 1)
    };
    
    changeStateProps(value){
        this.props.ChangeStateFn(value);
    };
  
  render(){

    const steps = getSteps();

    return (
        <div className='d-flex col-10'>
          <Stepper activeStep={this.props.projectState} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {this.props.projectState === steps.length ? (
              <div>
                <Typography>All steps completed</Typography>
                <Button>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography>{getStepContent(this.props.projectState)}</Typography>
                <div>
                  <Button
                    disabled={this.props.projectState === 0}
                    onClick={this.handleBack}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={this.handleNext}>
                    {this.props.projectState === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
  }
}


export default HorizontalLabelPositionBelowStepper