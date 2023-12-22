import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/button';
import { useState } from 'react';
import { ButtonTypes } from '../../../shared/themes/buttons';
import Text from '../../../shared/components/text/Text';

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
      <Text size="20px">Login</Text>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} />
      <Button
        type={ButtonTypes.primary}
        title="Entrar"
        onPress={handleSubmit}
      />
    </ContainerLogin>
  );
};

export default Login;
