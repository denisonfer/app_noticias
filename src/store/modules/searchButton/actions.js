export function handleShowSearchBar(visible_current) {
  return {
    type: '@searchButton/HANDLE_SHOW_SEARCH_BAR',
    payload: {
      visible_current
    }
  };
}

