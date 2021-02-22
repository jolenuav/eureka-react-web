import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import UserRepository from './firebase/repositories/UserRepository';
import generateStore from './redux/Store';

function App() {
  const store = generateStore();

  const [userfirestore] = React.useState(new UserRepository());

  React.useEffect(() => {
    const call = async () => {
      const test = await userfirestore.findAll();
    };
    call();
  }, [userfirestore]);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
