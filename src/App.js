
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Home , Contact,Services , About ,Navbar ,AddUsers ,PageNotFound, EditUsers, User} from './components/pages';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
   
    <Router>
     <div className="App">

    <Navbar />
    <Switch> 
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Services' component={Services} />
      <Route exact path='/users/add' component={AddUsers} />
      <Route exact path='/users/edit/:id' component={EditUsers} />
      <Route exact path='/user/:id' component={User} />
      

      <Route path='*' component={PageNotFound}/>

    </Switch>
    </div>
    </Router>
   
  
  );
}

export default App;
