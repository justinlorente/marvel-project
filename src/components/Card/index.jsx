import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { name, path, extension } = props;

    return (
        <div className="Card">
            <div className="thumbnail-container">
                <img
                    alt={name}
                    className="thumbnail"
                    src={`${path}.${extension}`}
                />
                <div className="read-more">read more</div>
            </div>
            <div className="container">
                <h2 className="name">{name}</h2>
                <i className="fa fa-star favorite" />
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string,
    extension: PropTypes.string,
};

Card.defaultProps = {
    name: '',
    path: '',
    extension: '',
};

export default Card;
