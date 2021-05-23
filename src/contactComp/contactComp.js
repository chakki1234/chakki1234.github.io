import React from 'react';


class ContactComp extends React.Component {
    
    render() {

      const back_gnd_style = {
        backgroundColor: '#ed574c',
      }

      const para_style = {
          color: '#c7cad4'
      }

      const head_style = {
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'white'
        }

     const link_style = {
        color: 'white',
     }

      return (
        <div className="d-flex flex-row col-12 justify-content-center align-items-center" id='scrollspyContact me' style={back_gnd_style}>
            <div className='d-flex flex-column col-4 align-items-center mt-4 mb-4' style={para_style}>
                <span style={head_style} >Contact Me</span>
                <span className='mb-2'>Aspiring to be a grad student in Computer Science at an American University. I would really appreciate any sort of advice regarding the same. </span>
                <span className='mb-2'>+91 9003056236, chakkirala.a@gmail.com, 107118015@nitt.edu</span> 
                <a style={link_style} href="https://www.linkedin.com/in/chakki-a-195a7495/" class="fab fa-linkedin-in"></a>
            </div>
        </div>     
      );
    }
  }

 export default ContactComp