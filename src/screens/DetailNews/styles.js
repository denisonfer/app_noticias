import styled from 'styled-components/native';
import { Platform } from 'react-native';

import colors from '../../constants/colors'
import normalize from '../../utils/normalize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.BACKGROUND_COLOR};
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const NewsTitle = styled.Text`
  font-size: ${normalize(22)}px;
  font-weight: bold;
  color: ${colors.COLOR_RED};
  margin-bottom: 17px;
`;

export const NewsMessage = styled.Text`
  font-size: ${normalize(16)}px;
  color: ${colors.SUBTITLE_COLOR};
  margin: 15px;
`;

export const NewsAuthor = styled.Text`
  font-size: ${normalize(11)}px;
  color: ${colors.TITLE_COLOR};
`;

export const NewsDate = styled.Text`
  font-size: ${normalize(11)}px;
  color: ${colors.COLOR_BLUE};
`;

export const Divider = styled.View`
  border: .4px solid gray;
  width: 100%;
  margin: 15px 0;
`;

export const Footer = styled.View`
  border: .2px solid red;
  background: ${colors.BACKGROUND_COLOR};
  margin-bottom: ${Platform.OS === 'ios' ? '15px' : '0px'}
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${normalize(16)}px;
  color: ${colors.COLOR_RED};

`;

