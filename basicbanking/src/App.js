import "./App.css";
import NavBar from "./Components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/HomePage/Home";
import GlobalState from "./Components/context/GobalState";
import Customer from "./Components/pages/Customers/Customers";
import Transaction from "./Components/pages/Transactions/Transactions";

// import NavBar from "./Components/navbar/NavBar";
function Appli() {
  return (
    <>
      <GlobalState>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/customers" component={Customer} />
            <Route path="/transactions" component={Transaction} />
          </Switch>
        </Router>
      </GlobalState>
    </>
  );
}
export default Appli;
