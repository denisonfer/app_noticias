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
