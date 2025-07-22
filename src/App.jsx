import { useState, useEffect } from 'react'


export default function App() {

  const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/ "
  const actorsUrl = "https://lanciweb.github.io/demo/api/actors/"

  //BONUS 2
  const [peopleData, setPeopleData] = useState([])
  const [filteredPeople, setFilteredPeople] = useState(peopleData);

  //BONUS 1
  // const [actressesData, setActressesData] = useState(null)
  // const [actorsData, setActorsData] = useState(null)


  const [apiActressesUrl, setApiActressesUrl] = useState(actressesUrl)
  const [apiActorsUrl, setApiActorsUrl] = useState(actorsUrl)
  const [searchQuery, setSearchQuery] = useState("")

  //BONUS2
  useEffect(() => {
    Promise.all([
      fetch(actressesUrl)
        .then(res => res.json()),
      fetch(actorsUrl)
        .then(res => res.json())
    ])
      .then(([actresses, actors]) => {
        const allActors = [...actresses, ...actors]
        setPeopleData(allActors)
      })
  }, [apiActressesUrl, apiActorsUrl])

  useEffect(() => {
    const filteredActors = peopleData.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredPeople(filteredActors)
  }, [searchQuery, peopleData])

  //BONUS 1
  // useEffect(() => {
  //   fetch(actressesUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       setActressesData(data)
  //     })
  // }, [actressesUrl])

  // useEffect(() => {
  //   fetch(actorsUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       setActorsData(data)
  //     })
  // }, [actorsUrl])

  return (
    <>
      {/* BONUS1 */}
      {/* <h1>Elenco Attrici</h1>

      <hr />

      <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-3'>
          {actressesData && actressesData?.map(actress => (
            <div key={actress.id} className='col'>
              <div className='card h-100'>
                <div className='card-body'>
                  <figure>
                    <img src={actress.image} className='card-img-top' alt="" />
                  </figure>
                  <div className='info mt-3'>
                    <h4 className='card-title'>
                      {actress.name}
                    </h4>
                    <p>{actress.birth_year}</p>
                    <p>{actress.nationality}</p>
                    <p>{actress.biography}</p>
                    <p>{actress.awards}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <h1>Elenco Attori</h1>

      <hr />

      <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-3'>
          {actorsData && actorsData?.map(actor => (
            <div key={actor.id} className='col'>
              <div className='card h-100'>
                <div className='card-body'>
                  <figure>
                    <img src={actor.image} className='card-img-top' alt="" />
                  </figure>
                  <div className='info mt-3'>
                    <h4 className='card-title'>
                      {actor.name}
                    </h4>
                    <p>{actor.birth_year}</p>
                    <p>{actor.nationality}</p>
                    <p>{actor.biography}</p>
                    <p>{actor.awards}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* BONUS 2 */}


      <div className='container'>
        <h1>Elenco Attrici e Attori</h1>

        <hr />

        <input type="text" value={searchQuery} placeholder='Ricerca per nome...' className='mb-3 w-100' onChange={(e) => setSearchQuery(e.target.value)} />

        <div className='row row-cols-1 row-cols-md-3 g-3'>
          {filteredPeople && filteredPeople?.map((person, index) => (
            <div key={index} className='col'>
              <div className='card h-100'>
                <div className='card-body'>
                  <figure>
                    <img src={person.image} className='card-img-top' alt="" />
                  </figure>
                  <div className='info mt-3'>
                    <h4 className='card-title'>
                      {person.name}
                    </h4>
                    <p>{person.birth_year}</p>
                    <p>{person.nationality}</p>
                    <p>{person.biography}</p>
                    <p>{person.awards}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}