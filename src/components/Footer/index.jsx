import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import SiteLogo from '../../images/site-marvel-logo.png';
import FooterData from '../../data/FooterData.json';

const Footer = () => {
    const renderItemList = (list) =>
        list.map((l) => (
            <li className="item" key={l.item}>
                <Link to={l.url}>{l.item}</Link>
            </li>
        ));

    const renderList = useMemo(
        () =>
            FooterData.map(({ id, list }) => (
                <ul className="list" key={id}>
                    {renderItemList(list)}
                </ul>
            )),
        []
    );

    return (
        <footer className="Footer">
            <div className="container mx-auto">
                <div className="content">
                    <img alt="Site Logo" className="logo" src={SiteLogo} />
                    {renderList}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
