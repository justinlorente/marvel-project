import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import '../../assets/css/main.css';

const Layout = (props) => {
    const { children } = props;

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-rqn26AG5Pj86AF4SO72RK5fyefcQ/x32DNQfChxWvbXIyXFePlEktwD18fEz+kQU"
                    crossOrigin="anonymous"
                />
            </Helmet>
            <div>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
