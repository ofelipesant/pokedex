import './search-bar.css'
import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import {BsQuestionLg} from "react-icons/bs"

export default function SearchBar(props){

    const {onSearch} = props
    let [search, setSearch] = useState('')

    const onChangeHandler = (event) => {
        setSearch(event.target.value)
        if(event.target.value.length == 0){
            onSearch(undefined)
        }
    }

    const onClickButtonHandler = () => {
         onSearch(search)
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
        </div>
    )
}