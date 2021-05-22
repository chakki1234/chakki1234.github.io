import React from 'react';

class ImgComp extends React.Component {
     
    render() {
      
      const img_style = {
        height: '350px',
        borderRadius: '60%'
      }

      const font_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '3rem',
        color: '#112f8a'
      }

      const para_style = {
        fontFamily: "Barlow",
        fontSize: '1.5rem',
        color: '#383434'
      }

      return (
        <div className='d-flex flex-row col-12 justify-content-around mt-5'>
           <img className='col-2' src='anish_pic.jpeg' style={img_style}/>
           <div className='d-flex flex-column col-8 '>
                <div className="d-flex col-12" style={font_style}>
                    About Me ...
                </div> 
                <div className="d-flex col-12" style={para_style}>
                    I am a web developer and a machine learning enthusiast majoring in Electrical and Electronics Engineering. I am proficient with programming languages C, Python, Javascript, and Dart. I also have a strong foundation in mathematics. Learned and practiced machine learning algorithms in Python with numerical libraries and Tensorflow. I am currently working with Dr. G V V Sharma of IIT Hyderabad on NLP. 
                </div> 
                
           </div>
        </div>
      );
    }
  }

 export default ImgComp