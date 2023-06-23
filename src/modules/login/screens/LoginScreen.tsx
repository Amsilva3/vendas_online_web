import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:3000/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert('Fez login');
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha invalido');
      });
    console.log('returnObject', returnObject);
  };
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./Background.png" />

      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="Usuário:" margin="32px 0px 0px " onChange={handleEmail} value={email} />
          <Input
            type="password"
            title="Senha:"
            margin="32px 0px 0px "
            onChange={handlePassword}
            value={password}
          />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
