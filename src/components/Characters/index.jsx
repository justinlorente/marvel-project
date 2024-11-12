import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import { getCharacters } from '../../../service/characters';
import Card from '../Card';
import Loader from '../Loader';

const renderingCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const dataCharacters = async () => {
        const conf = {
            limit: 20,
            offset,
            name: '',
        };

        const response = await getCharacters(conf);
        const responseCharacters = response.results;
        const responseLength = response.total;
        const responseLimit = response.limit;

        setHasMore(!(responseLength === 0 || responseLength === responseLimit));

        if (!responseCharacters) return;

        setCharacters([...characters, ...responseCharacters]);
        if (response.total) setOffset((prevOffset) => prevOffset + 1);
    };

    useEffect(() => {
        dataCharacters();
    }, []);

    const renderCharacters = () =>
        characters &&
        characters.map((character) => {
            const { name, thumbnail } = character;

            if (!characters) return <div>...nothing here</div>;

            return (
                <Card
                    key={uuidv4()}
                    name={name}
                    path={thumbnail.path}
                    extension={thumbnail.extension}
                />
            );
        });

    const renderEndMessage = () => (
        <p className="text-center">Seems like you have reached the end!</p>
    );

    return (
        <div className="Infinite-scroll-container">
            <InfiniteScroll
                dataLength={characters.length}
                next={dataCharacters}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={renderEndMessage()}
            >
                <div className="Columns-container">{renderCharacters()}</div>
            </InfiniteScroll>
        </div>
    );
};

export default renderingCharacters;
