import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { async } from 'rxjs'


const getPokemon = async name => {
    //const {results : allpokemons} = 
    const {results : allpokemons} = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000').then(res => res.json());
    return allpokemons.filter(pokemon => pokemon.name.includes(name));
}



export default function PokeApi() {

    const [search, setSearch] = useState('')

    const handleOnChange = async (e) => {
        if(e.target.value.length < 2) {
            setSearch([])
            return;
        }
        console.log(e.target.value)
        let values = await getPokemon(e.target.value);
        console.log(values)
        var pokeValues = ""
        values.forEach(element => {
            console.log(element.name)
            pokeValues = pokeValues + element.name + ","
            console.log(pokeValues)
        });
        console.log('poke values from fecth data')
        console.log(pokeValues)
        setSearch(pokeValues)
    }

    return (
        <div>
            Poke Api Search
            <br />
            <input  type="text" id='pokesearchtext' placeholder='Search' name='pokemon' onChange={handleOnChange} />
            <p>{search}</p>
        </div>
    )
}