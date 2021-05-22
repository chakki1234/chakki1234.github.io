import React from 'react';
import TextDiv from './TxtDiv'

class ImgTextComp extends React.Component {
     
    render() {
      
      const backgnd_style = {
        height: '100vh'
      }
      
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
            <TextDiv head='IISC' body='sddddddddd jjjnj bnj njn ijnikon inknkkn jnjkn njknjknkj njknjk n nkj jnj mk j nm  b n juib n iju jkum b  jk'/>
            <TextDiv head='IIT' body='orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
            <TextDiv head='Patterns Cognitive' body='orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
           </div>
           <div className='d-flex flex-row col-4 justify-content-center align-items-center'>
            <img src='intern.jpg' className='d-flex col-8' style={img_style}/>
           </div>
        </div>
      );
    }
  }

 export default ImgTextComp