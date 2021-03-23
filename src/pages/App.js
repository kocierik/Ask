import MatchDay from "./matchday/index"
import Home from "./home/index"
import Auth from "./auth/index"
import { Redirect, Route, Switch } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const App = () => {
  const { user} = useAuth()

  return user ? (
   <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth" component={Auth} />
    <Route path="/daily-match" component={MatchDay}  />
  </Switch>
  ) : (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth" component={Auth} />
    <Route render={() => <Redirect to="/auth" />} />
  </Switch>
  )
}

export default App