import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Pokedex from './components/Pokedex'
import { getDataPokemon, getPokemons } from './services/api'
import Footer from './components/Footer'

export default function App() { 
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pokemonsList, setPokemonsList] = useState([])

  const fetchPokemons = async () =>{
    const itemsPerPage = 51
    const offset = itemsPerPage*page

    try {
      setLoading(true)
      const data = await getPokemons(itemsPerPage, offset)

      const promises = data.results.map(async (pokemon) => {
        return await getDataPokemon(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemonsList(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itemsPerPage))

    } catch (error) {
      console.log(`fetchPokemons: ${error}`)
    }
  }

  useEffect(()=>{
    console.log('carregou')
    fetchPokemons()
  }, [page])


  return (
    <div>
      <NavBar/>

      <Pokedex 
        pokemonsList={pokemonsList} 
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

      <Footer/>

    </div>
  );
}


