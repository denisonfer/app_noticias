import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { SearchBar } from 'react-native-elements';

import colors from '../../constants/colors';

import {
  Container,
  Text,
  NewsContainer,
  NewsTitle,
  NewsMessage,
  NewsAuthor,
  NewsDate
} from './styles';

export default function NewsScreen() {
  const { navigate } = useNavigation();

  const { news } = useSelector(state => state.news);
  const { isSearchBarVisible } = useSelector(state => state.searchButton);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    if (news) {
      setMasterDataSource(news)
      setFilteredDataSource(news)
    }
  }, [news])

  const searchFilterFunction = useCallback(text => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  }, [masterDataSource])


  return (
    <>
      {isSearchBarVisible && (
        <SearchBar
          round
          lightTheme
          showCancel
          cancelIcon
          searchIcon={{ size: 24 }}
          cancelButtonTitle="Cancelar"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Digite algo"
          value={search}
          returnKeyType="done"
          returnKeyLabel="Buscar"
        />
      )}

      <Container>
        {news.length !== 0 ? (
          <FlatList
            data={filteredDataSource}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: report }) => (
              <NewsContainer onPress={() => navigate('DetailNews', { report })}>
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
    </>
  );

};
