import MatchDay from "./matchday/index"
import Auth from "./auth/index"
import userProfile from "../components/userProfile/index"
import { Redirect, Route, Switch } from 'react-router-dom';
import { userContext } from "../providers/UsersProvider";
import { useContext } from "react";
const App = () => {
  const user = useContext(userContext);

  return user ? (
   <Switch>
    <Route exaxt path="/auth" component={Auth} />
    <Route exact path="/daily-match" component={MatchDay}  />
    <Route exact path={`/profile/`} component={userProfile} />
  </Switch>
  ) : (
    <Switch>
    <Route path="/auth" component={Auth} />
    <Route render={() => <Redirect to="/auth" />} />
  </Switch>
  )
}

export default App