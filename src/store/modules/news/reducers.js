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

        break;
      }

      default:
        return state;
    }
  });
}
