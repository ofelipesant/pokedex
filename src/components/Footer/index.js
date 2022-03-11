import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import './footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <p>Acesse o <a href='https://github.com/ofelipesant/pokedex' target={'_blank'} rel={'external'}><strong>repositório do projeto</strong></a></p>
            
            <div className='social'>
                <p>by Felipe dos Santos</p>
                <a href='https://github.com/ofelipesant' target={'_blank'} rel={'external'}><FaGithub className='icon-footer' size={22}/></a>
                <a href='https://www.linkedin.com/in/felipe-dos-santos-1869a0221/' target={'blank'} rel={'external'}><BsLinkedin className='icon-footer' size={22}/></a>
            </div>
        </footer>
    )
}