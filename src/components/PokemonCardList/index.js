import './pokemon-card-list.css'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import { useContext } from 'react'
import FavoriteContext from '../../contexts/favoritesContext'
import { Link } from 'react-router-dom'

export default function PokemonCardList(props){
    const {pokemon} = props
    const {favoritePokemon ,updateFavoritePokemon} = useContext(FavoriteContext)
    const favIcon = favoritePokemon && favoritePokemon.includes(pokemon.name) ? <MdFavorite size={20}/> : <MdFavoriteBorder size={20}/>

    const onFavoriteClick = () => {
        updateFavoritePokemon(pokemon.name)
        console.log(favoritePokemon)
    }

    return(
        <Link to={`/${pokemon.name}`}>
            <div className="pokemon-card-list">
                <div className="pokemon-image-content">
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} loading='lazy'/>
                </div>
                <div className="pokemon-info">
                    <span className="pokemon-position">#{pokemon.id}</span>
                    <h3 className="pokemon-name">{pokemon.name.toUpperCase()}</h3>
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) =>{
                        return(
                            <div key={index} className={`type-${type.type.name} type-container`}>
                                {type.type.name}
                            </div>
                            )
                        })}
                    </div>
                    <button className='favorite' onClick={onFavoriteClick}>{favIcon}</button>
                </div>
        </div>
        </Link>
    )
}