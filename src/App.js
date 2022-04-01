import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'

import Games from './Games'
import TeamsAndPlayers from './TeamsAndPlayers'
import './nba.css'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
            <div className="margins">
              <div className="page-container">
                <img class="nba-logo" alt="nba-logo" src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg"/>
                <div className="ui massive horizontal bulleted link list navheader">
                    <div className="item">
                        <NavLink to="/">List of Teams + Players</NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="/scoreboard">Scoreboard</NavLink>
                    </div>
                </div>
                <div className="content">
                    <Route exact path="/" component={TeamsAndPlayers}/>
                    <Route path="/scoreboard" component={Games}/>
                </div>
              </div>
            </div>
            </HashRouter>
            )
    }
}

export default App