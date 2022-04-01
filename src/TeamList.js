import React from 'react';
import axios from 'axios';

 class TeamList extends React.Component {

state = {
    teams: []
}

componentDidMount() {
    const teamsOptions = {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/teams',
        params: {page: '0'},
        headers: {
         'x-rapidapi-key': 'f696b22da9msh4605553644f4a45p1c933fjsn56c915ee5367',
         'x-rapidapi-host': 'free-nba.p.rapidapi.com'
    }
  };
  
  axios.request(teamsOptions).then((response) => {
      const teams = response.data.data;
      this.setState({teams});
  }).catch(function (error) {
      console.error(error);
  });
}   

teamNameList() {
    return this.state.teams.map(team => {
        return (<tr key={team.id}>
                    <td>{team.abbreviation}</td>
                    <td class="can-select" onClick={() => this.props.onTeamClick(team.full_name)}>{team.full_name}</td>
                    <td>{team.conference}</td>
                 </tr>
                )
    })
}

render() {
    console.log(this.state.teams)
    return  (
            <div>
                <h1>List of NBA Teams</h1>
                <h4>(Select one to see some of its players)</h4>
                <table class="ui celled table">
                    <tr>
                        <th>Abbreviation</th>
                        <th>Team Name</th>
                        <th>Team Conference</th>
                    </tr>
                    {this.teamNameList()}
                </table>
                
                
            </div>
            )
            
}}

export default TeamList