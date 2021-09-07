import produce from 'immer';

const INITIAL_STATE = {
  isSearchBarVisible: false,
};

export default function searchButton(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@searchButton/HANDLE_SHOW_SEARCH_BAR': {
        const { visible_current } = action.payload;

        draft.isSearchBarVisible = !visible_current;

        break;
      }

      default:
        return state;
    }
  });
}
