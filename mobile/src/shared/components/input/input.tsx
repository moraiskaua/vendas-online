import { TextInputProps } from 'react-native';
import { InputContainer } from './input.style';

interface InputProps extends TextInputProps {}

const Input = ({}: InputProps) => {
  return <InputContainer />;
};

export default Input;
