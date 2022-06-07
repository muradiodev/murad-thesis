import axios from 'axios';

const baseDomain = 'https://abiturapi.azinweb.net';
const mediaDomain = 'https://abiturapi.azinweb.net';


export const customHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export const baseUrl = `${baseDomain}`;
export const mediaBase = `${mediaDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
