import PokemonCardList from '../PokemonCardList'
import './pokedex.css'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export default function Pokedex(props){
    const {pokemonsList, loading} = props
    console.log(pokemonsList)

    return(
        <main className="pokedex">

            <div className='pokedex-top'>
                <h1 className="pokedex-title">POKEDEX</h1>

                <div className="pagination">
                    <button className='pag-prev arrows'><FaArrowLeft size={28}/></button>
                    <button className='pag-next arrows'><FaArrowRight size={28}/></button>
                    <span className='pag-info'></span>
                </div>
            </div>
            
            {loading ? (
                <div>CARREGANDO</div> /* trocar para um modal ou tela de loading */
                ) : (
                <div className='pokedex-grid'>
                    {pokemonsList && pokemonsList.map((pokemon, index) => {
                        return(
                            <PokemonCardList key={index} pokemon={pokemon}/>
                        )
                    })}
                </div>
            )}
        </main>
    )
}