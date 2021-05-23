import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function getSteps() {
  return ['National Institute of Technology Trichy', 'Maharishi Vidya Mandir', 'Chinmaya Vidyalaya', 'Coursera Courses'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `I am a final year undergrad student majoring in Electrical and Electronics Engineering with a minor in Computer Science and Engineering. As a part of my B.Tech Program I have completed the following courses: Circuit Theory, Digital Electronics, Analog Electronics, Data Structure and Algorithms, Linear Integrated Circuits, Microprocessor and Microcontroller, VLSI, Computer Organization, DBMS, Operating system. CGPA 8.76`;
    case 1:
      return 'Completed my 11th and 12th here. Was a Computer Science student and finished off with 93.4%';
    case 2:
      return `My second home. Studied here from LKG to 10th. More than acads this school moulded me into the person I am. Lots of memories and bonds were created. Completed my class 10 with 10 CGPA`;
    case 3:
        return `Completed the course ‘​ Neural Networks and Deep Learning’ and ​ ‘Improving Deep Neural
        Networks and Hyperparameter tuning, Regularization and Optimization​’ ​from Deeplearning.ai
        through Coursera. Implemented Deep Neural Network, Regularization, Xavier Initialization, mini-batch gradient
        descent with momentum, RMS prop, and Adam Optimizer in Python using numerical libraries and
        designed an image classifier with Batch norm in TensorFlow as a part of the course`
      default: 
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.changeStateProps = this.changeStateProps.bind(this);
    }

    handleNext(){
        this.changeStateProps(this.props.eduState + 1) 
       };
    
     
    handleBack(){
        this.changeStateProps(this.props.eduState - 1)
    };
    
    changeStateProps(value){
        this.props.ChangeStateFn(value);
    };

  render(){

    const steps = getSteps();
    const backgnd_style = {
       backgroundColor: '#ecebe7'
    }
    
    return (
      <div className='d-flex col-10'>
        <Stepper activeStep={this.props.eduState} style={backgnd_style} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className='m-3'>
                  <div>
                    <Button
                      disabled={this.props.eduState === 0}
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    {(()=>{
                        if(this.props.eduState !== steps.length - 1){
                            return (<Button
                              variant="contained"
                              color="primary"
                              onClick={this.handleNext}
                            >
                              Next
                            </Button>)
                        }
                    })()}
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    );
    }
}

export default VerticalLinearStepper