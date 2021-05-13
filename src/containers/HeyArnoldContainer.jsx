import React, { Component } from 'react'
import CharacterList from '../components/characters/characterList'
import {findCharacters} from '../services/heyArnoldApi';

export default class HeyArnoldContainer extends Component {

    state = {
        loading: true, 
        characters: []
    }

   componentDidMount = async() => {
        const characters = await findCharacters(); 
        this.setState({
            characters,
            loading: false,
        });
    }


    render() {
        const { loading, characters } = this.state; 

        if (loading) return <h1>Loading...</h1>;

        return <CharacterList characters={characters} /> 

    }
}
