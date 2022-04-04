import "./App.scss";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import About from "./pages/about/About";
import TrackMood from "./pages/trackMood/TrackMood";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/how-to-use"
            exact
            render={(renderProps) => <About {...renderProps} />}
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
