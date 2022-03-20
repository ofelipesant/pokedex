import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import PokemonDetails from '../pages/PokemonDetails'

export default function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:name" element={<PokemonDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}