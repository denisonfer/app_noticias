import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup';

import Input from '../../components/Input';
import { requestCreateNews, requestUpdateNews } from '../../store/modules/news/actions';

import { Container, Form, ButtonDefault } from './styles';

export default function CreateNewsScreen({ route }) {
  const report = route.params ? route.params.report : null;

  const formRef = useRef(null);
  const messageRef = useRef();
  const dispatch = useDispatch();
  const { navigate } = useNavigation()

  const { loading } = useSelector(state => state.news)

  useEffect(() => {
    if (report) {
      formRef.current.setData({
        title: report.title,
        message: report.message,
        author: report.author
      })
    }
  }, [report])

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

  const handleUpdateNews = useCallback(async data => {
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

      dispatch(requestUpdateNews({ ...data, id: report.id }));

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
  }, [report])

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Form ref={formRef} onSubmit={(data) => report
            ? handleUpdateNews(data)
            : handleCreateNews(data)}
          >
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
              autoCapitalize="words"
            />

            {report ? (
              <ButtonDefault
                loading={loading}
                onPress={() => formRef.current.submitForm()}
              >
                Atualizar Notícia
              </ButtonDefault>
            ) : (
              <ButtonDefault
                loading={loading}
                onPress={() => formRef.current.submitForm()}
              >
                Cadastrar Notícia
              </ButtonDefault>
            )}


          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>


  );

};
