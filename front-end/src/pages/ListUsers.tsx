import React from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';
import User from '../interface/IUser';
import Navbar from '../components/Navbar';
import formas from '../images/formas.png'
import ramo from '../images/ramo.png'
import '../css/ListUsers.css'

const ListUsers: React.FC = () => {
  const { users, error } = useFetchUsers();

  return (
    <main>
      <Navbar />
      <img className='formas-listUsers' src={ formas } alt="" />
      <div className='page-listUsers'>
      <img className='ramo-listUsers' src={ ramo } alt="" />
        <div className='list-container'>
          <h1 className='title-listUsers'>Lista de Usuários</h1>
          {error && <p>Erro ao buscar usuários: {error}</p>}
            {users.map((user: User) => (
              <div className='ul-listUsers'>
              <li className='li-listUsers' key={user.id}>{user.fullName + ' ----- ' + user.email + ' ----- ' + user.phoneNumber + ' ----- ' + user.cellPhoneNumber}</li>
            </div>  
            ))}
        </div>
      </div>
    </main>
  );
}
export default ListUsers;

