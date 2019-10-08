import React, { Component } from "react";
import PropTypes from 'prop-types';
class Formulario extends Component {
  state = {
    categoria: "general"
  };
  cambiarCategoria = e => {
    //se puede hacer un callback despues del setState
    this.setState(
      {
        categoria: e.target.value
      },
      () => {
        this.props.consultarNoticias(this.state.categoria);
      }
    );
    //pasarlo a app.js
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Encuentra Noticias por Categoria</h2>
            <div className="input-field col s12">
              <select onChange={this.cambiarCategoria}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sport">Deportes</option>
                <option value="technology">Tecnologia</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Formulario.propTypes={
    consultarNoticias:PropTypes.func.isRequired
}
export default Formulario;
