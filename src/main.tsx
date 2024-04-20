import ReactDOM from 'react-dom/client';
import AppRouter from '@routes/AppRouter';
// Redux
import { store, persistor } from '@store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
//Axios
import "./services/axios-global.js"
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
