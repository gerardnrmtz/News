import React from "react";
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {
  //extraer los datos

  const { urlToImage, url, title, description, source } = noticia;
  //condicionalmente cargar image
  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
          {imagen}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_black"
            rel="noopener noreferrer"
            className="waver-effect waves-light btn"
          >
            Ver Noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};
Noticia.propTypes={
    noticia:PropTypes.object.isRequired
}
export default Noticia;
