import React from 'react'
import axios from 'axios'
import options from './api'
import TeamList from './TeamList'
import PlayersOnTeam from './PlayersOnTeam'
import './nba.css'

class TeamsAndPlayers extends React.Component {
    state = {
        players: [],
        selectedTeam: []
    }

    onTeamClick = async (teamName) => {
        this.setState({selectedTeam: teamName})                    
                await axios.request(options).then((response) => {
                    const players = response.data.data;
                    this.setState({players})
                }).catch(function (error) {
                    console.error(error);
                });
            }

    render() {
        return (
            <div class="grid-container">
                    <div>
                       <TeamList onTeamClick={this.onTeamClick}/>
                    </div>
                    <div>
                        <PlayersOnTeam players={this.state.players} selectedTeam={this.state.selectedTeam}/>
                    </div>
                </div>
        )
    }
}

export default TeamsAndPlayers