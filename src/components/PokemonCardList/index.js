import './pokemon-card-list.css'
import {MdFavoriteBorder} from 'react-icons/md'

export default function PokemonCardList(props){
    const {pokemon} = props
    return(
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

                <button className='favorite'><MdFavoriteBorder size={22}/></button>

            </div>
        </div>
    )
}