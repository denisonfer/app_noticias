import { all, takeLatest, put, select } from 'redux-saga/effects';
import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

import { successCreateNews } from './actions';

function* createNews({ payload }) {
  const { title, message, author } = payload.data

  const { news: stateNews } = yield select(state => state.news);

  const lastNews = stateNews[stateNews.length - 1]

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

export default all([
  takeLatest('@news/REQUEST_CREATE_NEWS', createNews),
]);
