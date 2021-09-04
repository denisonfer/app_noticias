import { all, takeLatest, put, call } from 'redux-saga/effects';
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

import { successCreateNews } from './actions';

function* createNews({ payload }) {
  console.tron.log('✨✨✨ ------ payload =>', payload.data);
  const { title, message, author } = payload.data

  const news = {
    id: Math.floor(Math.random() * (1000 - 1) + 1),
    title,
    message,
    author,
    date: format(new Date(), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
      locale: pt
    })
  }

  alert('Notícia cadastrada com sucesso!')

  yield put(successCreateNews(news))
}

export default all([
  takeLatest('@news/REQUEST_CREATE_NEWS', createNews),
]);
