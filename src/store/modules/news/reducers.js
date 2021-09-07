import produce from 'immer';

const INITIAL_STATE = {
  news: [],
  loading: false,
};

export default function news(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@news/REQUEST_CREATE_NEWS': {
        draft.loading = true;
        break;
      }

      case '@news/SUCCESS_CREATE_NEWS': {
        const { news } = action.payload;

        draft.loading = false;
        draft.news.push(news);
        draft.news.sort((a, b) => {
          return a.id < b.id;
        })


        break;
      }

      case '@news/DELETE_NEWS': {
        const { news_id } = action.payload;

        const newsIndex = draft.news.findIndex(
          item => item.id === news_id
        );

        if (newsIndex >= 0) {
          draft.news.splice(newsIndex, 1);
        }

        break;
      }

      case '@news/REQUEST_UPDATE_NEWS': {
        draft.loading = true;
        break;
      }

      case '@news/SUCCESS_UPDATE_NEWS': {
        const { newsData, indexOfState } = action.payload;

        draft.loading = false;
        draft.news[indexOfState].title = newsData.title;
        draft.news[indexOfState].message = newsData.message;
        draft.news[indexOfState].author = newsData.author;
        draft.news[indexOfState].date = newsData.date;
        break;
      }

      default:
        return state;
    }
  });
}
