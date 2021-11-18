import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoutoutList from './components/ShoutoutList';

function App() {
  return (
    <div className="App">
       <Router>
        <header className='App-header'>
          <h1>Shout Out App</h1>
          <nav>
            <Link to='/'>Shout Out List</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path='/' exact>
              <ShoutoutList />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
