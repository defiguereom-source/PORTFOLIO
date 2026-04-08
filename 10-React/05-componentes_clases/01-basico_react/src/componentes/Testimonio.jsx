import React from "react"; // No es necesario importar React en las versiones más recientes, pero se incluye por compatibilidad
import '../stylesheets/Testimonio.css';

class Testimonio extends React.Component{
  render(){
    return(
      <div className="container-testimonio">

        <img 
        className="img-testimonio" 
        src={require(`../img/${this.props.imagen}`)} 
        alt="Foto de persona" />

        <div className="container-text">
          <h2 className="nombre-pais">{this.props.nombre} en {this.props.pais}</h2>
          <p className="cargo">{this.props.cargo}</p>
          <p className="testimonio">{this.props.testimonio}</p>
        </div>

      </div>
    );
  }
}

export default Testimonio;