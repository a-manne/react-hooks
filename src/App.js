import React from 'react';
import Home from './pages/Home';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import GlobalProvider from "./context/GlobalProvider";

import './App.css';

function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/newPost' exact component={NewPost} />
            <Route path='/:postId' exact component={Post} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
