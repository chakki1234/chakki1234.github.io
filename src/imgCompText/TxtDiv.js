import React from 'react';

class TextDiv extends React.Component {
    
  constructor(props) {
    super(props);
    this.ChangeStateFn = this.ChangeStateFn.bind(this)
  }

  ChangeStateFn(val){
    this.props.ChangeStateFn(val);
  }
    
    render() {
      
      const font_style = {
        fontFamily: "Roboto Condensed",
        fontSize: '2rem',
        color: '#112f8a',
        marginLeft: '10px'
      }

      const para_style = {
        fontFamily: "Barlow",
        fontSize: '1.5rem',
        color: '#383434'
      }

      const btn_style = {
        borderRadius: '50%'
      }

      return (
            <div className='d-flex col-8 mt-4 mb-4 flex-column'>
                <div className='d-flex flex-row'>
                    <button style={btn_style} onClick={()=>{ this.ChangeStateFn(this.props.value) }} class="btn btn-outline-dark">+</button>
                    <span style={font_style} >{this.props.head}</span>
                </div> 
                { this.props.internState === this.props.value ?  <div>
                    <span style={para_style} >{this.props.body}</span>  
                </div>: <span></span>}

            </div> 
      );
    }
  }

 export default TextDiv