import React from 'react';
import TextDiv from './TxtDiv'

class ImgTextComp extends React.Component {
     
    render() {
      
      const backgnd_style = {
        height: '100vh'
      }

      const heading = ['IISC Spire Labs', 'IIT Hyderabad', 'Patterns Cognitive']
      const content = ['sddddddddd jjjnj bnj njn ijnikon inknkkn jnjkn njknjknkj njknjk n nkj jnj mk j nm  b n juib n iju jkum b  jk', 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.']
      
      const img_style = {
        height: '400px',
        borderRadius: '60%'
      }

      const font_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '4rem',
        color: '#ed574c'
      }

      return (
        <div className='d-flex flex-row col-12 justify-content-around ' style={backgnd_style}>
           <div className='d-flex flex-column col-8 justify-content-center align-items-center'>
            <div className='d-flex col-12 flex-row justify-content-center'>
                <span style={font_style} >Internships...</span>
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