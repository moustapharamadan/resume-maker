import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import {GeneralInfo} from "./components/GeneralInfo/GeneralInfo";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {SwitchButton} from "./components/NavigationBar/SwitchButton/SwitchButton"
export default function App() {
  return (
    <Provider store={store}>
        <SwitchButton checked={true} name="picture"/>
        <NavigationBar/>
        <GeneralInfo/>
    </Provider>
  );
}
