
import { Redirect, Route, Switch } from 'react-router'
import GettingStarted from './components/getting-started/getting-started';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';

function App() {
  return (
    <div className="App w-full h-full">
     <Switch>
     <Route exact path='/' render={()=> <Redirect to='/getting-started' />} />
       <Route exact path='/getting-started' component={GettingStarted} />
       <Route exact path='/signup' component={SignUp} />
       <Route exact path='/signin' component={SignIn} />
     </Switch>
    </div>
  );
}

export default App;
