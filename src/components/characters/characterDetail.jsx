import React from 'react'; 
import PropTypes from 'prop-types'; 

const CharacterDetail = ({ name, image }) => (
        <figure aria-label="individual" role="individual">  
            <img src={image} alt={name} /> 
            <figcaption>
            <p>{name}</p>
            </figcaption>
        </figure> 
);



CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired 
}

export default CharacterDetail;