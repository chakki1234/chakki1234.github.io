import React from 'react';

class TextDiv extends React.Component {
     
    render() {
      
      const font_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '2rem',
        color: '#112f8a'
      }

      const para_style = {
        fontFamily: "Barlow",
        fontSize: '1.5rem',
        color: '#383434'
      }

      return (
            <div className='d-flex col-8 mt-3 flex-column'>
                <div>
                  <span style={font_style} >{this.props.head}</span>
                </div> 
                <div>
                    <span style={para_style} >{this.props.body}</span>
                </div>
            </div> 
      );
    }
  }

 export default TextDiv