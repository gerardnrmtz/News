import React, { Component, Fragment } from "react";
import Header from "./components/Header.js";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario.js";
class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }
  consultarNoticias = async (categoria='general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=9a568227225249e49ce69e8d66b5ee54`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
      noticias: noticias.articles
    });
  };
  render() {
    return (
      <Fragment>
        <Header titulo="Noticias REACT API" />
        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}/>
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
