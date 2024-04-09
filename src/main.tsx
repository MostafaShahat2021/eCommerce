import ReactDOM from 'react-dom/client';
import AppRouter from '@routes/AppRouter';
// Redux
import store from "@store/index"
import { Provider } from 'react-redux';
// styles
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.createRoot(document.getElementById('root')!).render(<Provider store={store}><AppRouter /></Provider>);
