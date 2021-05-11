import React, { Component } from 'react'
import {findCharacters} from '../services/heyArnoldApi';

export default class HeyArnoldContainer extends Component {
    state = {
        loading: true, 
        characters: []
    }

    async componentDidMount() {
        const characters = await findCharacters(); 
        this.setState({
            characters,
            loading: false,
        });
    }

    render() {
        const { loading, characters } = this.state; 

        if (loading) return <h1>Loading...</h1>;

        return <ul aria-label="characters"></ul>

    }
}
