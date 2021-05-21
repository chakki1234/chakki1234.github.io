import React from 'react';
import DownComp from './inDropDown'

class DropDownComp extends React.Component {
     
    render() {

      const border_style = {
        borderStyle :'solid',
        borderWidth : '2px 0px 2px 0px',
        height: '50px'
      }
      
      
      return (
        <div className="d-flex flex-row col-2 justify-content-between" style={border_style}>
        { (()=>{
          let drop_list = []
          Object.values(this.props).forEach(e => {
            drop_list.push(<DownComp name={e} />) 
          });
          return drop_list
        })() }
        </div>     
      );
    }
  }

 export default DropDownComp