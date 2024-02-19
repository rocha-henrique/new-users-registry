import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import User from '../interface/IUser';
import cellPhoneIMG from '../images/cell-phone.png';
import phoneIMG from '../images/phone.png';
import emailIMG from '../images/email.png';
import userIMG from '../images/user.png'

const Form: React.FC = () => {
  const [user, setUser] = useState<Partial<User>>({}); 
  const [submittedUser, setSubmittedUser] = useState<User | null>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
    validateFields({...user, [name]: value});
  };

  const validateFields = (newUser: Partial<User>) => {
    const fullName = newUser.fullName?.trim();
    if (fullName) {
      const spaceIndex = fullName.indexOf(' ');
      const isFullNameValid = spaceIndex !== -1 && spaceIndex !== 0 && spaceIndex !== fullName.length - 1;
      const isEmailValid = Boolean(newUser.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser.email));
      const isPhoneValid = Boolean(newUser.phoneNumber && /^\d{10,11}$/.test(newUser.phoneNumber));

      setIsButtonEnabled(isFullNameValid && isEmailValid && isPhoneValid);
    }
  };

  const handleSubmit = async () => {
    try {
      const response: AxiosResponse<User> = await axios.post<User, AxiosResponse>('http://localhost:3001/user', user as User);
      setSubmittedUser(response.data);
    } catch (error) {
    } finally {
      setUser({});
      setIsButtonEnabled(false);
    }
  }

  return (
    <div className='main-form'>
      <div className='container-form'>
        <label className='label-form' htmlFor="fullName">Nome e sobrenome:</label>
          <div className='container-img'>
            <img className='container-icons' src={ userIMG } alt="" />
            <input className='container-input' placeholder='ex: alan turing' type="text" id="fullName" name="fullName" value={user.fullName || ''} onChange={handleInputChange} />
          </div>
        <label className='label-form' htmlFor="email">Email:</label>
          <div className='container-img'>
            <img className='container-icons' src={ emailIMG } alt="" />
            <input className='container-input' placeholder='ex: alan@example.com' type="text" id="email" name="email" value={user.email || ''} onChange={handleInputChange} />
          </div>
        <label className='label-form' htmlFor="phoneNumber">Telefone:</label>
          <div className='container-img'>
          <img className='container-icons' src={ phoneIMG } alt="" />
            <input className='container-input' placeholder='ex: 11999999999' type="text" id="phoneNumber" name="phoneNumber" value={user.phoneNumber || ''} onChange={handleInputChange} />
          </div>
        <label className='label-form' htmlFor="cellPhoneNumber">Telefone Celular</label>
          <div className='container-img'>
            <img className='cellPhone' src={ cellPhoneIMG } alt="" />
            <input className='container-input' placeholder='Opcional:' type="text" id="cellPhoneNumber" name="cellPhoneNumber" value={user.cellPhoneNumber || ''} onChange={handleInputChange} />
          </div>
        <button className='btn-criar' onClick={handleSubmit} disabled={!isButtonEnabled}>Criar</button>
      </div>
      {submittedUser && (
        <div className='container-submitted'>
          <h2>Usuário criado com sucesso!</h2>
          <p className='submittedUser'>{submittedUser.fullName + ' - ' + submittedUser.email + ' - ' + submittedUser.phoneNumber + ' - ' + submittedUser.cellPhoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default Form;