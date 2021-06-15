import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BreedSelectPage from '../containers/breedSelect/BreedSelectPage';
import { DogDetail } from '../components/dogDetail/DogDetail';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/DogDetail">
          <DogDetail />
        </Route>
        <Route path="/BreedList" exact>
          <BreedSelectPage />
        </Route>
        <Redirect
          exact
          path="/"
          to="/BreedList">
          
        </Redirect>
        {/*<Route>
          <NotFound />
        </Route>*/}
      </Switch>
    </Router>
  );
}

export default App;
