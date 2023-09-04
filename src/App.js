import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import "./assets/main.css";

import Home from "./pages/Home";

import QueryWrapper from "./components/QueryWrapper";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0,
            suspense: true
        }
    }
});

const App = () => {
    return (
        <QueryWrapper>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </Router>
            </QueryClientProvider>
        </QueryWrapper>
    )
}

export default App;