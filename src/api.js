const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  params: {page: '0', per_page: '100'},
  headers: {
    'x-rapidapi-key': 'f696b22da9msh4605553644f4a45p1c933fjsn56c915ee5367',
    'x-rapidapi-host': 'free-nba.p.rapidapi.com'
  }
};

export default options