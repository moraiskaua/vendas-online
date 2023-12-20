import { Text } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { useState } from 'react';

interface LoginProps {}

const Login = ({}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      return alert('Preencha todos os campos!');
    }

    alert(`Email: ${email}\nSenha: ${password}`);
  };

  return (
    <ContainerLogin>
      <Text>Tela de Login!</Text>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} />
      <Button title="Entrar" onPress={handleSubmit} />
    </ContainerLogin>
  );
};

export default Login;
