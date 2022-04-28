import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import LoginPage from "./pages/authentication/loginPage";
import RegistrationPage from "./pages/authentication/registrationPage";
import WalletList from "./pages/walletList";
import War from "./pages/war";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={War} />
                    <Route
                        exact
                        path="/registration"
                        component={RegistrationPage}
                    />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/news" component={War} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
