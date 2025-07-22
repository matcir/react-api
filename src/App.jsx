import { useState, useEffect } from 'react'


export default function App() {

  const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/ "
  const actorsUrl = "https://lanciweb.github.io/demo/api/actors/"

  const [actressesData, setActressesData] = useState(null)
  const [actorsData, setActorsData] = useState(null)
  const [apiActressesUrl, setApiActressesUrl] = useState(actressesUrl)
  const [apiActorsUrl, setApiActorsUrl] = useState(actorsUrl)

  useEffect(() => {
    fetch(actressesUrl)
      .then(res => res.json())
      .then(data => {
        setActressesData(data)
      })
  }, [actressesUrl])

  useEffect(() => {
    fetch(actorsUrl)
      .then(res => res.json())
      .then(data => {
        setActorsData(data)
      })
  }, [actorsUrl])

  return (
    <>
      <h1>Elenco Attrici</h1>

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
      </div>
    </>
  )
}