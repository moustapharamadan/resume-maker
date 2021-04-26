import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Section } from "./components/NavigationBar/Section/Section"
export default function App() {
  return (
    <Provider store={store}>
      <Section />
      <NavigationBar />
      <GeneralInfo />
    </Provider>
  );
}
