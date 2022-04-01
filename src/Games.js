import React from 'react';
import axios from 'axios';
import DateSelect from './DateSelect'
import moment from 'moment'
import './nba.css'

class Games extends React.Component {
    state = {games : [], date: ''}

    //commenting out do not have an original call due to having the date hard coded and not connected to datepicker
    // componentDidMount() {


    //     const options = {
    //     method: 'GET',
    //     url: 'https://free-nba.p.rapidapi.com/games',
    //     params: {page: '0', per_page: '25', dates: ['2021-04-20']},
    //     headers: {
    //         'x-rapidapi-key': 'f696b22da9msh4605553644f4a45p1c933fjsn56c915ee5367',
    //         'x-rapidapi-host': 'free-nba.p.rapidapi.com'
    //     }
    //     };

    //     axios.request(options).then((response) => {
    //         const games = response.data.data;
    //         this.setState({games});
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }

    renderGames() {
        console.log(this.state.games)
        console.log(this.state.date)
        if (!this.state.date) {
            return <div align="center">Select a date to see games played on that date</div>
        }
        else return this.state.games.map((game) => {
            if (game.home_team_score > game.visitor_team_score){
            return (
                    <tr key={game.id}>
                        <td className="positive winner">{game.home_team.full_name}</td>
                        <td className="positive winner">{game.home_team_score}</td>
                        <td>-</td>
                        <td>{game.visitor_team.full_name}</td>
                        <td>{game.visitor_team_score}</td>
                    </tr>
                    )
                }
            else {
                return (
                    <tr key={game.id}>
                        <td>{game.home_team.full_name}</td>
                        <td>{game.home_team_score}</td>
                        <td>-</td>
                        <td className="positive winner">{game.visitor_team.full_name}</td>
                        <td className="positive winner">{game.visitor_team_score}</td>
                    </tr>
                )
            }
        })
    }

    setDate = async (date) => {
        await this.setState({date: moment(date).format('YYYY-MM-DD')}) //VS code said await does nothing on this line, however it fixed a bug where below API call was happening with empty date string

        let newGameSearch = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/games',
            params: {page: '0', per_page: '25', dates: [`${this.state.date}`]},
            headers: {
                'x-rapidapi-key': 'f696b22da9msh4605553644f4a45p1c933fjsn56c915ee5367',
                'x-rapidapi-host': 'free-nba.p.rapidapi.com'
            }
            };
    
            await axios.request(newGameSearch).then((response) => {
                const games = response.data.data;
                this.setState({games});
            }).catch(function (error) {
                console.error(error);
            });
    }


    render() {
        return <div align="center" className="winner">
                      Select a date to see the games played on that date: <DateSelect setDate={this.setDate}/>
                    <table class="ui celled table">
                      <thead>
                        <tr>
                            <th>Home Team</th>
                            <th> Home Team Score</th>
                            <th>  </th>
                            <th>Away Team</th>
                            <th> Away Team Score</th>
                        </tr>
                      </thead>
                      <tbody>
                         {this.renderGames()} 
                      </tbody>
                    </table>
                </div>
                    
    }
}

export default Games