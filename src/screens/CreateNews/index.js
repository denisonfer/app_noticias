import React, { useCallback, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup';

import Input from '../../components/Input';
import { requestCreateNews } from '../../store/modules/news/actions';

import { Container, Form, ButtonDefault } from './styles';

export default function CreateNewsScreen() {
  const formRef = useRef(null);
  const messageRef = useRef();
  const dispatch = useDispatch();
  const { navigate } = useNavigation()

  const { loading } = useSelector(state => state.news)

  const handleCreateNews = useCallback(async data => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Título obrigatório'),
        message: Yup.string().required('Mensagem obrigatória'),
        author: Yup.string().required('Autor obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(requestCreateNews(data));

      navigate('News')

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const messageError = {};

        error.inner.forEach(err => {
          messageError[err.path] = err.message;
        });

        formRef.current.setErrors(messageError);
      }
    }
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <Form ref={formRef} onSubmit={handleCreateNews}>
          <Input
            name="title"
            icon="newspaper"
            placeholder="Título"
            autoCapitalize="words"
            returnKeyType="next"
            onSubmitEditing={() => messageRef.current.focus()}
          />

          <Input
            ref={messageRef}
            name="message"
            placeholder="Notícia"
            message
          />

          <Input
            name="author"
            icon="account-tie"
            placeholder="Autor"
          />

          <ButtonDefault loading={loading} onPress={() => formRef.current.submitForm()}>
            Cadastrar Notícias
          </ButtonDefault>
        </Form>
      </Container>
    </ScrollView>

  );

};
