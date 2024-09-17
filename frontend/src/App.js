import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import MovieDetails from './pages/MovieDetailPage';
import Booking from './pages/BookingPage';
//import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header, navigation bar, or other layout components can be added here */}
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/booking/:id" component={Booking} />
          <Route component={NotFound} />
        </Switch>
        
        {/* Footer or other layout components can be added here */}
      </div>
    </Router>
  );
}

export default App;
