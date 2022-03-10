import SearchBar from '../SearchBar'
import './nav-bar.css'
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

export default function NavBar(){
    const pokeLogo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
     
    return(
        <header className='cabecalho'>
            <img  className='logo' alt='pokedex-logo' src={pokeLogo}/>
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