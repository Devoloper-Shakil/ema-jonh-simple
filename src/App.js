
import './App.css';
import Heder from './components/Header/Heder';
import Shop from './components/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Reviw from './components/OderReviw/Reviw';
import Manege from './components/Manege/Manege';
import NotFound from './components/NotFound/NotFound';
import ProdactDetels from './components/ProdactDetel/ProdactDetels';





function App() {

  return (
    <div >
      <Heder></Heder>

      <Router>
        <Switch>
          <Route path="/Shop">
            <Shop></Shop>
          </Route>
          <Route path="/reviw">
            <Reviw></Reviw>
          </Route>
          <Route path="/mange">
            <Manege></Manege>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/category/:category">
            <ProdactDetels></ProdactDetels>

          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>





    </div>
  );
}

export default App;
