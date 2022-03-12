import PokemonCardList from '../PokemonCardList'
import './pokedex.css'
import Pagination from '../Pagination'

export default function Pokedex(props){
    const {pokemonsList, loading, page, setPage, totalPages} = props

    const previousClick = () => {
        if(page > 0){
            setPage(page-1)
        }
    }

    const nextClick = () => {
        if(page !== totalPages){
            setPage(page+1)
        }
    }


    return(
        <main className="pokedex">

            <div className='pokedex-top'>
                <h1 className="pokedex-title">POKEDEX</h1>
                <Pagination
                    page={page+1}
                    totalPages={totalPages}
                    previousClick={previousClick}
                    nextClick={nextClick}
                />
            </div>
            
            {loading ? (
                <div className='loading'></div> /* trocar para um modal ou tela de loading */
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