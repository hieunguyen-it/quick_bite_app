import React from 'react';
import {Home} from '@screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
