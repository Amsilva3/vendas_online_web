import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./Background.png" />

      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title="Usuário:" />
          <Input title="Senha:" />
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
