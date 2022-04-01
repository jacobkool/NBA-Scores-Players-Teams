import React from 'react';

class PlayersOnTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.players,
            selectedTeam: this.props.selectedTeam,
            teamName: ''
        }
    }


    playersOnTeam() {
        return this.props.players.map(player => {
            if (player.team.full_name === this.props.selectedTeam) {
                return (<div classname="item" key={player.id}>
                            {player.first_name} {player.last_name}
                        </div>
                        )
            } else {
                return null
            }
        })
    }

    render(){
        console.log(this.props.players)
        console.log(this.props.selectedTeam)
        if (typeof this.props.selectedTeam === 'string') {
        return (
           <div>  
                <h1>
                    List of (some) players on {this.props.selectedTeam}
                 </h1>
                 <h4>
                     The reason only some players show up is an API limitation, it can only GET 100 players at a time. Also this is not current, players are from anytime.
                </h4>
                <div class="ui list">
                    {this.playersOnTeam()}
                </div>
            </div>
       )
    } else {
        return <h1>Select a team to see its players</h1>
    }
} 
}

export default PlayersOnTeam