import { TextInputProps } from 'react-native';
import { InputContainer, InputText } from './input.style';
import { ReactNode } from 'react';

interface InputProps extends TextInputProps {
  icon?: ReactNode;
}

const Input = ({ icon, ...props }: InputProps) => {
  return (
    <InputContainer>
      <InputText {...props} />
      {icon}
    </InputContainer>
  );
};

export default Input;
