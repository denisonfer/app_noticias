import styled from 'styled-components/native';

import colors from '../../constants/colors'
import normalize from '../../utils/normalize'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${colors.BACKGROUND_COLOR};
  padding: 20px;
`;

export const Text = styled.Text`
  font-size: ${normalize(22)}px;
  font-weight: bold;
  color: ${colors.TITLE_COLOR};
`;


export const NewsContainer = styled.TouchableOpacity`
  border: .5px solid ${colors.SUBTITLE_COLOR};
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 10px;
`;

export const NewsTitle = styled.Text`
  font-size: ${normalize(18)}px;
  font-weight: bold;
  color: ${colors.COLOR_RED};
`;

export const NewsMessage = styled.Text`
  font-size: ${normalize(14)}px;
  color: ${colors.SUBTITLE_COLOR};
  margin: 15px;
`;

export const NewsAuthor = styled.Text`
  font-size: ${normalize(12)}px;
  color: ${colors.TITLE_COLOR};
  margin-bottom: 10px;
`;

export const NewsDate = styled.Text`
  font-size: ${normalize(10)}px;
  color: ${colors.COLOR_BLUE};
`;

