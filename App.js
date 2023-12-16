import Topbar from "./topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Topbar />
    <Switch>
     <Route path="/">
      <Home />
     </Route>
    </Switch>
   
    </Router>
  );
}

export default App;
