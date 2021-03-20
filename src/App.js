import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search/javascript" component={SearchPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
