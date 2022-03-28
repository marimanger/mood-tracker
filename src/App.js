import "./App.scss";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";


class App extends React.Component {
  render() {
    console.log("Hia");

    return (
      <>
      <Header/>
      <Switch>
      
      </Switch>
      <Main/>
      <Footer/>
      </>
    );
  }
}

export default App;
