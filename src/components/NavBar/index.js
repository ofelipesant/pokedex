import SearchBar from '../SearchBar'
import './nav-bar.css'
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { useContext } from 'react'
import FavoriteContext from '../../contexts/favoritesContext'

export default function NavBar(){
    const pokeLogo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

    const {favoritePokemon} = useContext(FavoriteContext)
     
    return(

        <header className='cabecalho'>
            <img  className='logo' alt='pokedex-logo' src={pokeLogo}/>
            <div className='favorites'>FAVORITOS ({favoritePokemon.length})</div>
            <SearchBar/>
           
           <div className='theme-container'>
               <button className='theme-icon'>
                   <BsMoonStarsFill 
                        size={24}
                        color={'#fff'}/>
                </button>
               <button className='theme-icon'>
                   <BsFillSunFill 
                        size={24}
                        color={'#fff'}/>
                </button>
           </div>
        </header>
    )
}