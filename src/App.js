import "./App.scss";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Account from "./pages/account/Account";
import TrackMood from "./pages/trackMood/TrackMood";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/account"
            exact
            render={(renderProps) => <Account {...renderProps} />}
          />
          <Route
            path="/track-mood"
            exact
            render={(renderProps) => <TrackMood {...renderProps} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
