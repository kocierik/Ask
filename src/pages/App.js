import MatchDay from "./matchday/index"
import Auth from "./auth/index"
import { Redirect, Route, Switch } from 'react-router-dom';
import { userContext } from "../providers/UsersProvider";
import { useContext } from "react";
const App = () => {
  // const { user } = useAuth()
  const user = useContext(userContext);
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