import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import logo from './logo.svg';
import Footer from './components/Footer/Footer'
import Spinner from './components/Spinner/Spinner'
import './App.css';

const Home = React.lazy(() => import('./components/Home/Home'))
function App() {
  return (
    <Router>
      <React.Suspense fallback={<Spinner />}>
    <div className="App">
      <Nav/>
      {/* chage the path for the deployed version in github pages */}
      <Route exact path='/mimiz-pizza' component={Home} />
      
      <Footer />
      
    </div>
    </React.Suspense>
    </Router>
  );
}

export default App;
