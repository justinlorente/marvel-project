import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
    const { children } = props;

    return (
        <div className="Container">
            <div className="content">
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
