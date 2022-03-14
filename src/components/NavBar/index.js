import SearchBar from '../SearchBar'
import './nav-bar.css'
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { useState, useContext } from 'react'
import FavoriteContext from '../../contexts/favoritesContext'
import { searchPokemon } from '../../services/api'
import NotFoundModal from '../modals/NotFoundModal'

export default function NavBar(props){
    const {fetchPokemons, setLoading, setPokemonsList, setPage, setTotalPages} = props

    const {favoritePokemon} = useContext(FavoriteContext)
    const [notFound, setNotFound] = useState(false)

    const pokeLogo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

    const onSearchHandler = async (pokemon) => {
        setNotFound(false)

        if(!pokemon){
           return fetchPokemons()
        }
        
        setLoading(true)
        setNotFound(false)
        const resultSearch = await searchPokemon(pokemon)

        if(!resultSearch){
            setNotFound(true)
            fetchPokemons()
        } else{
            setPokemonsList([resultSearch])  
        }
        setLoading(false)
    }
     
    return(

        <header className='cabecalho'>
            <img  className='logo' alt='pokedex-logo' src={pokeLogo}/>
            <div className='favorites'>FAVORITOS ({favoritePokemon ? favoritePokemon.length : 0})</div>

            <SearchBar onSearch ={onSearchHandler} />

            {notFound && <NotFoundModal/>}

           <div className='theme-container'>
               <button className='theme-icon'>
                   <BsFillSunFill 
                        size={24}
                        color={'#fff'}/>
                </button>
           </div>
           
        </header>
    )
}