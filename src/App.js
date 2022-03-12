import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Pokedex from './components/Pokedex'
import { getDataPokemon, getPokemons } from './services/api'
import Footer from './components/Footer'
import {FavoriteProvider} from './contexts/favoritesContext'

export default function App() { 
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pokemonsList, setPokemonsList] = useState([])
  const [favorites, setFavorites] = useState([])

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
    fetchPokemons()
  }, [page])

  const updateFavoritePokemon = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)

    if(favoriteIndex >= 0){
      updateFavorites.splice(favoriteIndex, 1)
    } else{
      updateFavorites.push(name)
    }
    setFavorites(updateFavorites)
  }


  return (
    <FavoriteProvider
      value={
        {
          favoritePokemon: favorites,
          updateFavoritePokemon: updateFavoritePokemon
        }
      }>

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

    </FavoriteProvider>
  );
}


