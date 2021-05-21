import React from 'react';

class InDropDownComp extends React.Component {
     
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
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {(()=>{
              let list_options = []
              if(typeof this.props.values != 'undefined'){
                this.props.values.forEach(e => {
                  console.log(e)
                  list_options.push( <li><a class="dropdown-item" href="#">{e}</a></li>)
                });
              }
              return list_options 
            })()}
        </ul>

        </div>
      );
    }
  }

 export default InDropDownComp




//  {(()=>{
//   if( typeof this.props.value != 'undefined' ){
//   let list_options = []
//   this.params.value.forEach(e => {
//     list_options.push(<li><a class="dropdown-item" href="#">{e}</a></li>)
//   });
   
//   return (<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <li><a class="dropdown-item" href="#">qqq</a></li>
//             <li><a class="dropdown-item" href="#">qqq</a></li>
//             <li><a class="dropdown-item" href="#">qqq</a></li>
//           </ul>);
//   }
//   else
//   return null;
// })()}