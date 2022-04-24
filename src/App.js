import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import WalletList from "./pages/walletList";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/donate" component={WalletList} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
