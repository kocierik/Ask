import MatchDay from "./matchday/index"
import Auth from "./auth/index"
import { Redirect, Route, Switch } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const App = () => {
  const { user } = useAuth()

  return user ? (
   <Switch>
    <Route path="/auth" component={Auth} />
    <Route path="/daily-match" component={MatchDay}  />
  </Switch>
  ) : (
    <Switch>
    <Route path="/auth" component={Auth} />
    <Route render={() => <Redirect to="/auth" />} />
  </Switch>
  )
}

export default App