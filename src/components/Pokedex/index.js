import PokemonCardList from '../PokemonCardList'
import './pokedex.css'

export default function Pokedex(props){
    const {pokemonsList, loading} = props
    console.log(pokemonsList)

    return(
        <main className="pokedex">
            <h1 className="title">Pokedex</h1>

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