import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/notFound.png'
import '../css/NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className='container-notFound'>
      <h1>Erro 404</h1>
      <h1>Ops, não encontramos essa página!</h1>
      <p>Desculpe, a página que você está procurando pode nunca ter existido.</p>
      <Link to="/">Voltar para o menu</Link>
      <img className='img-notFound' src={ notFound } alt="" />
    </div>
  );
}

export default NotFound;