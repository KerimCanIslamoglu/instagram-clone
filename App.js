import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Navigation from './src/Navigation/Navigation'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/Reducers'


const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}



const styles = StyleSheet.create({


});

export default App;
