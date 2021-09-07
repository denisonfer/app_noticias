import { all, takeLatest, put, select } from 'redux-saga/effects';
import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

import { successCreateNews, successUpdateNews } from './actions';

function* createNews({ payload }) {
  const { title, message, author } = payload.data

  const { news: stateNews } = yield select(state => state.news);

  const lastNews = stateNews[0]

  const news = {
    id: !lastNews ? 1 : lastNews.id + 1,
    title,
    message,
    author,
    date: format(new Date(), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
      locale: pt
    }),
  }

  alert('Notícia cadastrada com sucesso!')

  yield put(successCreateNews(news))
}

function* updateNews({ payload }) {
  const newsPayload = payload.data;

  const { news: stateNews } = yield select(state => state.news);

  const newsIndex = stateNews.findIndex(
    item => item.id === newsPayload.id
  );

  const newData = {
    title: newsPayload.title,
    message: newsPayload.message,
    author: newsPayload.author,
    date: format(new Date(), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
      locale: pt
    }),
  }

  alert('Notícia atualizada com sucesso!')


  yield put(successUpdateNews(newData, newsIndex))
}

export default all([
  takeLatest('@news/REQUEST_CREATE_NEWS', createNews),
  takeLatest('@news/REQUEST_UPDATE_NEWS', updateNews),
]);
