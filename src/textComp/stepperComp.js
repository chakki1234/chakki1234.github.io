import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['National Institute of Technology Trichy', 'Maharishi Vidya Mandir', 'Chinmaya Vidyalaya'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `I am a final year undergrad student majoring in Electrical and Electronics Engineering with a minor in Computer Science and Engineering. As a part of my B.Tech Program I have completed the following courses:`;
    case 1:
      return 'Completed my 11th and 12th here. Was a Computer Science student and finished off with 93.4%';
    case 2:
      return `My second home. Studied here from LKG to 10th. More than acads this school moulded me into the person I am. Lots of memories and bonds were created. Completed my class 10 with 10 CGPA`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const backgnd_style = {
     backgroundColor: '#ecebe7'
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className='d-flex col-10' >
      <Stepper activeStep={activeStep} style={backgnd_style} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {(()=>{
                      if(activeStep != steps.length - 1){
                          return (<Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
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
