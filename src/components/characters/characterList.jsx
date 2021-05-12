import React from 'react'; 
import PropTypes from 'prop-types';
import Character from '../characters/character';

const CharacterList = ({ characters }) => (
    <ul aria-label="characters">
    {characters.map((character) => (
        <li> 
            <Character 
                name={character.name}
                image={character.image}
            />
        </li>
    ))}
    </ul>
);
CharacterList.propTypes =  {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default CharacterList;