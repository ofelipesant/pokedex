import PokemonCardDetails from "../../components/PokemonCardDetails"
import { useState } from "react"
import { searchPokemon } from "../../services/api"
import Footer from "../../components/Footer"
import TopBar from "../../components/TopBar"

export default function PokemonDetails(){
    const [pokemon, setPokemon] = useState('')
    
    const loadPokemon = async (name) => {
        const data = await searchPokemon(name)
        setPokemon(data)
    }

    return(
        <>
        <TopBar/> 
        <PokemonCardDetails loadPokemon={loadPokemon} pokemon={pokemon}/>
        <Footer/>
        </>
    )
}