import React from 'react'; 
import PropTypes from 'prop-types'; 

const CharacterDetail = ({ name, image }) => (
        <div alt="individual-character">  
            <img src={image} alt={name} /> 
            <p>{name}</p>
        </div> 
);



CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired 
}

export default CharacterDetail;