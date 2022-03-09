import tournaments from '../../data/tournaments.json'


const TournamentCards = () => {
  return (
    <div>
      {tournaments.map((tournament, index) => (
        <div className='card' key={index}>
          <p className='date'>{tournament.date.toUpperCase()}</p>
          <img src={`/images/${tournament.img}.png`} alt="" />
          <h2>{tournament.name.toUpperCase()}</h2>
          <div className='type'>
            {tournament.method === 'online' ? <p className='method p-online'>{tournament.method.toUpperCase()}</p> : <p className='method p-in-person'>{tournament.method.toUpperCase()}</p>}
            <p className='plataform'>{tournament.plataform1.toUpperCase()}</p>
            {tournament.plataform2 === '' ? null : <p className='plataform'>{tournament.plataform2.toUpperCase()}</p>}
          </div>
          {tournament.method === 'online' ? <div className='method-line l-online'></div> : <div className='method-line l-in-person'></div>}
        </div>
      ))}
    </div>
  );
}

export default TournamentCards;