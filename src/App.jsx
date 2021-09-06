import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MaterialUIPage from './pages/MaterialUIPage';
import VanillaPage from './pages/VanillaPage';
import TopBar from './components/TopBar';

function App() {
    return (
        <Router>
            <div className="App">
                <TopBar />

                <Switch>
                    <Route exact path="/">
                        <MaterialUIPage />
                    </Route>
                    <Route exact path="/vanilla">
                        <VanillaPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
