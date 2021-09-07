import React, { useCallback } from 'react';
import { ScrollView, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { removeNews } from '../../store/modules/news/actions'

import {
  Container,
  Row,
  NewsTitle,
  NewsMessage,
  NewsAuthor,
  NewsDate,
  Divider,
  Footer,
  Button,
  TextButton
} from './styles';

export default function DetailNewsScreen({ route }) {
  const { report } = route.params;
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleRemoveNews = useCallback(() => {
    Alert.alert(
      'Atenção!',
      'Deseja realmente excluir essa notícia?',
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Remover", onPress: () => {
            dispatch(removeNews(report.id))
            navigate('News')
          }
        }
      ])
  }, [report])

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <Container>
          {report ? (
            <>
              <NewsTitle>{report.title}</NewsTitle>

              <Row>
                <NewsAuthor>{report.author}</NewsAuthor>
                <NewsDate>{report.date}</NewsDate>
              </Row>

              <Divider />

              <NewsMessage>{report.message}</NewsMessage>
            </>
          ) : (
            <NewsMessage>Carregando...</NewsMessage>
          )}
        </Container>
      </ScrollView>

      <Footer>
        <Row>
          <Button
            style={{ borderRightWidth: 0.2 }}
            onPress={() => navigate('CreateNews', { report })}
          >
            <TextButton>Editar</TextButton>
          </Button>
          <Button onPress={handleRemoveNews}>
            <TextButton>Excluir</TextButton>
          </Button>
        </Row>
      </Footer>
    </>
  );

};
