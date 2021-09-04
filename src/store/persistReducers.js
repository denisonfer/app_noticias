import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'app_noticias',
      storage: AsyncStorage,
      whitelist: ['news'],
    },
    reducers
  );
  return persistedReducer;
};
