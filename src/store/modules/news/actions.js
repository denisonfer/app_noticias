export function requestCreateNews(data) {
  return {
    type: '@news/REQUEST_CREATE_NEWS',
    payload: {
      data,
    },
  };
}

export function successCreateNews(news) {
  return {
    type: '@news/SUCCESS_CREATE_NEWS',
    payload: {
      news,
    },
  };
}

export function removeNews(news_id) {
  return {
    type: '@news/DELETE_NEWS',
    payload: {
      news_id,
    },
  };
}

export function requestUpdateNews(data) {
  return {
    type: '@news/REQUEST_UPDATE_NEWS',
    payload: {
      data,
    },
  };
}

export function successUpdateNews(newsData, indexOfState) {
  return {
    type: '@news/SUCCESS_UPDATE_NEWS',
    payload: {
      newsData,
      indexOfState,
    },
  };
}
