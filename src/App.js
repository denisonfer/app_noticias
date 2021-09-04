import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Router from "./routes/app.routes";

export default function App() {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  )
}
