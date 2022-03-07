import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Pokedex from './components/Pokedex'
import { getDataPokemon, getPokemons } from './services/api'

export default function App() { 
  const [loading, setLoading] = useState(false)
  const [pokemonsList, setPokemonsList] = useState([])

  const fetchPokemons = async () =>{
    try {
      setLoading(true)
      const data = await getPokemons()

      const promises = data.results.map(async (pokemon) => {
        return await getDataPokemon(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemonsList(results)
      setLoading(false)

    } catch (error) {
      console.log(`fetchPokemons: ${error}`)
    }
  }

  useEffect(()=>{
    console.log('carregou')
    fetchPokemons()
  }, [])


  return (
    <div>
      <NavBar/>
      <Pokedex pokemonsList={pokemonsList} loading={loading}/>
    </div>
  );
}


