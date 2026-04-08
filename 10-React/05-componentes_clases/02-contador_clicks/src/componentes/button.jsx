import React from 'react';
  
class Button extends React.Component {
  render() {
    return (
      <button 
      className={this.props.BotonClick ? 'boton-click' : 'boton-reiniciar' }
      onClick = {this.props.manejarClick}>
          {this.props.texto}
      </button>    
    )
  }
}

export default Button;