import { fetchData } from '../axios/axios';

export const getCharacters = async (conf) => {
    try {
        const objConf = {
            limit: conf.limit,
            offset: conf.offset,
        };

        if (conf.name) objConf.name = conf.name;

        const response = await fetchData({
            url: 'characters',
            params: objConf,
        });

        return response.data.data;
    } catch (error) {
        return error;
    }
};
