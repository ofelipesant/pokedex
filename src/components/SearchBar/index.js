import './search-bar.css'
import { useState } from 'react'
import { GrFormSearch } from "react-icons/gr";
import { searchPokemon } from '../../api'

export default function SearchBar(){
    let [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (event) => {
        setSearch(event.target.value)
    }

    const onClickButtonHandler = () => {
         onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)        

        if(!pokemon){
            //inserir um modal depois
            console.log('nenhum pokemon informado') 
        }
    }

    return(
        <div className='search-bar'>
            <input 
            className='search-input' 
            type={'text'} 
            placeholder='Pesquise seu Pokemon'
            onChange={onChangeHandler}
            />

            <button className='button-search' onClick={onClickButtonHandler}>
                <GrFormSearch size={24}/>
            </button>

            <div>
                {pokemon ? (
                    <div>
                        <img src={pokemon.sprites.front_default}/>
                        <div>{pokemon.id}</div>
                        <div>{pokemon.name}</div>
                    </div>
                    
                ) : null
            }
            </div>
        </div>
    )
}