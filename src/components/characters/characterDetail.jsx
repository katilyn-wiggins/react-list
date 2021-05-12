import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom'; 

const CharacterDetail = ({ name, image }) => (
        <>        
            <img src={image} alt={name} /> 
            <p>{name}</p>
     </>
);



CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired 
}

export default CharacterDetail;