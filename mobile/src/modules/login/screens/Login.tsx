import { Text } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';

interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <ContainerLogin>
      <Text>Tela de Login!</Text>
      <Input />
      <Button title="Teste" />
    </ContainerLogin>
  );
};

export default Login;
