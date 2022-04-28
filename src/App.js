import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import LoginPage from "./pages/authentication/loginPage";
import RegistrationPage from "./pages/authentication/registrationPage";
import CreateTablePage from "./pages/general/createTablePage";
import MainPage from "./pages/mainPage";
import War from "./pages/war";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route
                        exact
                        path="/registration"
                        component={RegistrationPage}
                    />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/news" component={War} />
                    <Route exact path="/main" component={MainPage} />
                    <Route
                        exact
                        path="/createTable"
                        component={CreateTablePage}
                    />
                    <Route
                        children={() => (
                            <img
                                src="https://i.stack.imgur.com/6M513.png"
                                alt="404 page not found"
                            />
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
