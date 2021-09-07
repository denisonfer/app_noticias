import styled from 'styled-components/native';

import colors from '../../constants/colors'
import normalize from '../../utils/normalize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.BACKGROUND_COLOR};
  padding: 20px;
`;

export const Text = styled.Text`
  font-size: ${normalize(22)}px;
  font-weight: bold;
  color: ${colors.TITLE_COLOR};
`;

