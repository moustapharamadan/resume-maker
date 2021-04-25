import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import {GeneralInfo} from "./components/GeneralInfo/GeneralInfo";
export default function App() {
  return (
    <Provider store={store}>
        <GeneralInfo/>
    </Provider>
  );
}
