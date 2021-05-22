import React from 'react';

class InDropDownComp extends React.Component {
     
  constructor(props) {
    super(props);
    this.changeStateChild = this.changeStateChild.bind(this)
  }

  changeStateChild(index){
    if(typeof this.props.ChangeStateFn !==  'undefined'){
      this.props.ChangeStateFn(index)
    }
  }
  
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
        <button class="btn btn-light dropdown-toggle p-0" id='dropdownMenuButton' style={btn_background} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {this.props.name}
        </button>
        
            {(()=>{
              let list_options = []
              if(typeof this.props.values != 'undefined'){
                this.props.values.forEach((e, i) => {
                  console.log(e)
                  list_options.push( <li><a class="dropdown-item" onClick={()=>{ this.changeStateChild(i) }} href="#">{e}</a></li>)
                });
              
              return (<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {list_options}
                      </ul>
                      ) 
              }
            })()}
        </div>
      );
    }
  }

 export default InDropDownComp
