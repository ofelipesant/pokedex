import './top-bar.css'
import {BsFillSunFill} from 'react-icons/bs'
import { changeTheme } from '../../services/theme'
import {MdArrowBackIosNew} from 'react-icons/md'
import {Link} from 'react-router-dom'


export default function NavBar(){

    const pokeLogo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

    return(

        <header className='top-bar'>

        <div className="cabecalho">
            <img  className='logo' alt='pokedex-logo' src={pokeLogo}/>
               <div className='theme-container'>
                   <label>
                       <input
                       type="checkbox"
                       className='theme-icon'
                       onChange={changeTheme}
                       />
                    </label>
                       <BsFillSunFill
                        size={24}
                        color={'#fff'}/>
               </div>
        </div>

        <div className='navigation'>
        
            <Link to={"/"} className='link'>
                <MdArrowBackIosNew size={26} className='back-arrow'/> <span className='prev-text'>Voltar</span>
            </Link>

        </div>
        </header>
    )
}