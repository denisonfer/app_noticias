import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import colors from '../../constants/colors';

import { Container, Text, NewsContainer, NewsTitle, NewsMessage, NewsAuthor, NewsDate } from './styles';

export default function NewsScreen() {
  const { navigate } = useNavigation();

  const { news } = useSelector(state => state.news);

  return (
    <Container>
      {news.length !== 0 ? (
        <FlatList
          data={news}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: report }) => (
            <NewsContainer>
              <NewsTitle>{report.title}</NewsTitle>
              <NewsMessage>{report.message.substring(0, 50) + '...'}</NewsMessage>
              <NewsAuthor>{report.author}</NewsAuthor>
              <NewsDate>{report.date}</NewsDate>
            </NewsContainer>
          )}

        />
      ) : (
        <Text>Não Tem notícias</Text>
      )}

      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: colors.BACKGROUND_BUTTONS_RED
        }}
        small
        icon="plus"
        onPress={() => navigate('CreateNews')}
      />
    </Container>
  );

};
