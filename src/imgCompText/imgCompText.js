import React from 'react';
import TextDiv from './TxtDiv'

class ImgTextComp extends React.Component {
     
    render() {
      
      const backgnd_style = {
        height: '100vh'
      }

      const heading = ['IISC Spire Labs', 'IIT Hyderabad', 'Patterns Cognitive']
      const content = ['In progress', 
      `Guided by Dr. G.V.V Sharma, Associate Professor, Indian Institute of Technology Hyderabad
      To find patterns in various holy poems from Hindu Scriptures, belonging to different Indian
      Languages, using an ML model.
      Given unlabelled stanzas from different holy poems, the task was to extract feature vectors and
      cluster all the stanzas that belong to the same holy poem using an ML model.
      The objective is to use the trained ML model to determine if a person is chanting any holy poem
      accurately.
      The ML framework used is TensorFlow, along with NLP libraries like iNLTK.`, `Designed and verified a Python-based program using OpenCV, which detects the date, amount,
      and MICR number of a cheque and feeds the data to a custom made text extractor.`]
      
      const img_style = {
        height: '400px',
        borderRadius: '60%'
      }

      const head_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '4rem',
        color: '#ed574c'
      }

      return (
        <div className='d-flex flex-row col-12 justify-content-around' id='scrollspyInternship' style={backgnd_style}>
           <div className='d-flex flex-column col-8 justify-content-center align-items-center'>
            <div className='d-flex col-12 flex-row justify-content-center'>
                <span style={head_style} >Internships...</span>
            </div> 

            {(()=>{
                let divList = []
                heading.forEach((e, index)=>{
                    divList.push(<TextDiv internState={this.props.internState} ChangeStateFn={this.props.ChangeStateFn} value={index} head={heading[index]} body={content[index]}/>)
                })
                return divList;
            })()}
           </div>
           <div className='d-flex flex-row col-4 justify-content-center align-items-center'>
            <img src='intern.jpg' className='d-flex col-8' style={img_style}/>
           </div>
        </div>
      );
    }
  }

 export default ImgTextComp