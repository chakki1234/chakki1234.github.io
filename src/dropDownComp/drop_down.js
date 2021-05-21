import React from 'react';
import InDropDownComp from './inDropDown'

class DropDownComp extends React.Component {
     
    render() {

      const border_style = {
        borderStyle :'solid',
        borderWidth : '2px 0px 2px 0px'
      }

      const drop_down_obj = {
        Education: ['National Institute of Technology Trichy', 'Maharishi Vidya Mandir', 'Chinmaya Vidyalaya'],
        Internship: ['SPIRE Labs, IISC', 'IIT Hyderabad', 'Patterns Cognitive'],
        Projects: ['Police CMS', 'Spider Orientation App', 'Recal UAE'],
        'Contact me': ['+91 9003056236', 'chakkirala.a@gmail.com', '107118015@nitt.edu']
      }
      
      
      return (
        <div className="d-flex flex-row col-2 justify-content-between" style={border_style}>
        { (()=>{
          let drop_list = []
          Object.values(this.props).forEach(e => {
            drop_list.push(<InDropDownComp name={e} values={drop_down_obj[e]} />) 
          });
          return drop_list
        })() }
        </div>     
      );
    }
  }

 export default DropDownComp