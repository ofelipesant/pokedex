import { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Pokedex from '../../components/Pokedex'
import { getDataPokemon, getPokemons } from '../../services/api'
import Footer from '../../components/Footer'
import {FavoriteProvider} from '../../contexts/favoritesContext'

export default function Home() { 

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pokemonsList, setPokemonsList] = useState([])
  const [favorites, setFavorites] = useState([])

  const favoritesKey = 'key'

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

  const loadFavoritePokemons = () => {
    const pokemonsLocalStorage = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemonsLocalStorage)
  }

  const updateFavoritePokemon = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)

    if(favoriteIndex >= 0){
      updateFavorites.splice(favoriteIndex, 1)
    } else{
      updateFavorites.push(name)
    }

    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites))
    setFavorites(updateFavorites) 
  }
  
  useEffect(()=>{
    fetchPokemons()
  }, [page])

  useEffect(()=>{
    loadFavoritePokemons()
  }, [])



  return (
    <FavoriteProvider
      value={
        {
          favoritePokemon: favorites,
          updateFavoritePokemon: updateFavoritePokemon
        }
      }>

    <>
      <NavBar
       fetchPokemons={fetchPokemons}
       setLoading={setLoading}
       setPokemonsList={setPokemonsList}
       setPage={setPage}
       setTotalPages={setTotalPages}
      
      />

      <Pokedex 
        pokemonsList={pokemonsList} 
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

      <Footer/>

    </>

    </FavoriteProvider>
  );
}