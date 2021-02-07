import React from 'react'
import {Provider} from 'react-redux'
import store from './app/store'
import {Text} from './components/Text'
import styles from './style.css';

export default function App() {
  return (
    <Provider store={store}>
        <Text stateName="firstName" placeholder="First Name" value="Moustapha"/>
        <Text stateName="lastName" placeholder="Last Name"/>
        <Text stateName="professionalTitle" placeholder="Professional Title"/>
    </Provider>
  );
}
