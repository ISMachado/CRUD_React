import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/api';
import { UserFormContainer, InputField, Button } from '../styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      if (response.data.token) {
        history.push('/users');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <UserFormContainer>
    <form className="login-form">
        <h2>Login</h2>
        <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
    </form>
</UserFormContainer>

  );
};

export default Login;
