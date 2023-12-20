import { Text, View } from 'react-native';
import styled from 'styled-components/native';

interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <ViewModify>
      <Text>Tela de Login!</Text>
    </ViewModify>
  );
};

export default Login;

const ViewModify = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
