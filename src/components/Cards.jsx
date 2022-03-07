import predatorLogo from '/images/Predator.png'
import bigGamesLogo from '/images/big-games.png'

const tournaments = [
  {
    name: 'predator league',
    img: predatorLogo,
    date: '19 de marzo',
    method: 'online',
    plataform1: 'pc',
    plataform2: 'playstation'
  },
  {
    name: 'big game',
    img: bigGamesLogo,
    date: '02 de abril',
    method: 'presencial',
    plataform1: 'pc',
    plataform2: ''
  },
]

const TournamentCards = () => {
  return (
    <div>
      {tournaments.map((tournament, index) => (
        <div className='cards' key={index}>
          <h2>{tournament.name.toUpperCase()}</h2>
          <img src={tournament.img} alt="" />
          <p className='date'>{tournament.date.toUpperCase()}</p>
          <div className='type'>
            {tournament.method === 'online' ? <p className='p-online'>{tournament.method.toUpperCase()}</p> : <p className='p-in-person'>{tournament.method.toUpperCase()}</p>}
            <p className='plataform'>{tournament.plataform1.toUpperCase()}</p>
            {tournament.plataform2 === '' ? null : <p className='plataform'>{tournament.plataform2.toUpperCase()}</p>}
          </div>
      </div>
      ))}
    </div>
  );
}

export default TournamentCards;