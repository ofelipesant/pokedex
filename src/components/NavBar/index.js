import SearchBar from '../SearchBar'
import './nav-bar.css'

export default function NavBar(){
    const pokeLogo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'


    
    return(
        <header className='cabecalho'>
            <img  className='logo' alt='pokedex-logo' src={pokeLogo}/>
            <SearchBar/>
        </header>
    )
}