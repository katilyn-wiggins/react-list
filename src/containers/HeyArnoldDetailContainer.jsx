import React, { Component } from 'react'
import CharacterDetail from '../components/characters/characterDetail'
import {findCharacter} from '../services/heyArnoldApi';


export default class HeyArnoldDetailContainer extends Component {
    _isMounted = false;

    state = {
        loading: true, 
        characterData: []
    }

    componentDidMount = async () => {
        this._isMounted = true; 

        this.setState({
            loading: false,
            characterData: await findCharacter(this.props.match.params.id), 
        });
        await console.log(this.state.characterData)
    }

    componentWillUnmount () {
        this._isMounted = false; 
    }

    render() {
        const { loading, characterData } = this.state; 

        if (loading) return <h1>Loading...</h1>;

        return <CharacterDetail 
        name={characterData.name}
        image={characterData.image}
    />  

    }
}
