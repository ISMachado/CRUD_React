import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../services/api';
import { UserFormContainer, InputField, Button } from '../styles';

const UserForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user ? user.first_name : '');
  const [lastName, setLastName] = useState(user ? user.last_name : '');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Você pode fazer a lógica para criar ou atualizar o usuário aqui
      // Neste exemplo, estamos apenas atualizando o usuário
      await updateUser(user.id, { first_name: firstName, last_name: lastName });
      history.push('/users');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <UserFormContainer>
      <h2>{user ? 'Edit User' : 'Create User'}</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button type="submit">{user ? 'Update' : 'Create'}</Button>
      </form>
    </UserFormContainer>
  );
};

export default UserForm;
