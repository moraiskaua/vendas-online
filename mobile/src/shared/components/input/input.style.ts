import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

export const InputContainer = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 0 10px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  height: 100%;
`;
