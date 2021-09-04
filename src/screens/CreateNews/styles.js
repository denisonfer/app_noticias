import styled from 'styled-components/native';
import { Form as UnformForm } from '@unform/mobile';

import colors from '../../constants/colors';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${colors.BACKGROUND_COLOR};
  padding: 20px;
`;

export const Form = styled(UnformForm)`
  width: 100%;
`;

export const ButtonDefault = styled(Button)`
  margin: 10px 0;
`;


