import axios from "axios";

// endpoint
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    headers: {
        "Content-Type": "application/json"
    }
});

// request function
export const FetchPokemon = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch ( error ) {
        console.error( ` Error fetchingPokemon: ${ error.message} `);
        throw error;
    };
};

export default api;