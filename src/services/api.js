export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log(`erro searchPokemon: ${error}`)
    }
}

export const getPokemons = async (limit = 51, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log(`erro getPokemons: ${error}`)
    }
}

export const getDataPokemon = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log(`erro getDataPokemon: ${error}`)
    }
}

