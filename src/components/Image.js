import React from 'react';

// Componente para crear el elemento html img, utiliza los datos enviados desde componente Images
const Image = (props) => {

    const {urls, alt_description} = props.info;

    return (
        <img className="img-thumbnail" src={urls.small} alt={alt_description}/>
    );
};

export default Image;
