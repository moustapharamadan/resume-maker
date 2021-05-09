import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import ContactInfoPopUp from "./components/ContactInfoPopUp/ContactInfoPopUp";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationBar />
      <GeneralInfo />
      <ContactInfoPopUp />
    </Provider>
  );
}
