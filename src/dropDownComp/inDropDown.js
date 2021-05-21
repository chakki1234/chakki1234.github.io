import React from 'react';

class DownComp extends React.Component {
     
    render() {
      
      const font_style = {
        fontFamily: "Teko",
      }

      const btn_background = {
        backgroundColor: 'white',
        borderWidth: '0px 0px 0px 0px',
        fontSize: '1.3rem'
      }

      return (
        <div class="dropdown" style={font_style}>
        <button class="btn btn-light dropdown-toggle" style={btn_background} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {this.props.name}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      );
    }
  }

 export default DownComp