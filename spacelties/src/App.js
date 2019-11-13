import React from 'react';
import Accueil from './components/Accueil/Accueil';
import About from './components/Accueil/liens-footer/About';
import Form from './components/Accueil/liens-footer/Form';
import Facebook from './components/Accueil/liens-footer/Facebook';
import Easy from './components/Accueil/liens-footer/Easy';
import Future from './components/Accueil/liens-footer/Future';
import Snakes from './components/Accueil/liens-footer/Snakes';
import Trajetoria from './components/Accueil/liens-footer/Trajetoria';
import ChoicePage from './components/ChoicePage/ChoicePage'
import { Switch, Route} from 'react-router-dom';
import Result from './components/Result/Planete'

class App extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/About" component={About} />
          <Route path="/Form" component={Form} />
          <Route path="/Facebook" component={Facebook} />
          <Route path="/Easy" component={Easy} />
          <Route path="/Future" component={Future} />
          <Route path="/Snakes" component={Snakes} />
          <Route path="/Trajetoria" component={Trajetoria} />
          <Route path="/ChoicePage" component={ChoicePage} />
          <Route path="/Result" component={Result} />
        </Switch>
      </div>
    )
  }
}

export default App;