import './pokemon-card-details.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ProgressBar from '../ProgressBar'

export default function PokemonCardDetails(props){
    const {loadPokemon, pokemon} = props

    const {name} = useParams()

    useEffect( async () => {
       await loadPokemon(name)
    }, [])
    
    return(
        <main className='pokemon-details'>
            <section className='pokemon-infos'>
                <div className='pokemon-photo'>
                    <img 
                    src={`../images/animated/${pokemon.id}.gif`}
                    className='pokemon-sprite'
                    />
                </div>

                <div className='infos-geral'>
                    <h2 class='pokemon-card-title'>
                        {pokemon && pokemon.name.toUpperCase()}
                        <span> #{pokemon.id}</span>
                    </h2>

                    <div class='types'>
                        {pokemon && pokemon.types.map((type, index) => {
                            return(
                                <div key={index} className={`type-${type.type.name} type-container`}>
                                    {type.type.name}
                                </div>
                            )
                        })}
                    </div>

                    <div className='peso-altura'>
                            <p>Peso: {pokemon.weight} Kg</p>
                            <p>Altura: {pokemon.height}0 cm</p>
                    </div>

                </div>
            </section>

            <section className='pokemon-status'>


                <div className='status'>
                    <h3 className='status-title'>STATUS</h3>
                     <div className='status-result'>
                         {pokemon && pokemon.stats.map((stat, index) => {
                             return(
                                 <ProgressBar
                                 key={index}
                                 statName={stat.stat.name}
                                 stat={stat.base_stat}
                                 />
                             )
                         })}
                     </div>
                </div>
            </section>
        </main>
    )
}