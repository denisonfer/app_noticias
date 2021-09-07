import styled from 'styled-components/native';

import colors from '../../constants/colors'
import normalize from '../../utils/normalize'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  background: ${colors.BACKGROUND_BUTTONS_RED};
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-size: ${normalize(16)}px;
  color: ${colors.COLOR_WHITE};
`;
