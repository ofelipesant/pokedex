import './search-bar.css'
import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import {BsQuestionLg} from "react-icons/bs"
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

        if(!pokemon){
            //inserir um modal depois
            console.log('nenhum pokemon informado') 
        }

        const result = await searchPokemon(pokemon)
        setPokemon(result)        

    }

    return(
        <div className='search-bar'>
            <button className='info-button'>
                <BsQuestionLg size={15} color='#fff'/>
            </button>

            <div className='info-modal'>
                <p>Pesquise pelo nome do pokemon ou pelo seu número</p>
            </div>

            <input 
            className='search-input' 
            type={'text'} 
            placeholder='Pesquise seu Pokemon'
            onChange={onChangeHandler}
            />
            
            <span className='search-span'>
                    <button className='button-search' onClick={onClickButtonHandler}>
                    <FiSearch size={22} color='#FFF' />
                    </button>
            </span>

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