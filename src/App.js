import logo from './logo.svg';
import './App.css';
import Login from './screen/login'
import {Provider} from 'react-redux'
import store from './store/store'
import AppRoute from './router/appRoute'

function App() {
  return (
    <Provider store={store}>
<AppRoute />
    </Provider>
  );
}

export default App;
