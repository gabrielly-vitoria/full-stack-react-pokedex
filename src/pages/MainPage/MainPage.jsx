import { useState, useEffect } from "react";

// components
import MainHeader from "../../components/MainHeader/MainHeader";
import PokemonsList from "../../components/PokemonsList/PokemonsList";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

import api from '../../services/PokeAPI';

// styles
import { MainPageContainer } from "./MainPageStyles"; 

function MainPage() {
    const [pokemons, setPokemons] = useState([]);  // Lista inicial dos 20 Pokémon
    const [filteredPokemon, setFilteredPokemon] = useState(null); // Pokémon pesquisado
    const [error, setError] = useState("");

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await api.get("/");
                const results = response.data.results;

                const pokemonsData = await Promise.all(
                    results.map(async (pokemon) => {
                        const details = await api.get(pokemon.url);
                        return details.data;
                    })
                );

                setPokemons(pokemonsData);
            } catch {
                setError("Erro ao carregar Pokémons!");
            }
        };

        getPokemons();
    }, []);

    // Função para buscar um Pokémon específico
    const handleSearch = async (pokemonName) => {
        setError("");

        if (!pokemonName.trim()) {
            setFilteredPokemon(null); // Se o usuário limpar a pesquisa, volta para os 20 iniciais
            return;
        }

        try {
            const response = await api.get(`/${pokemonName.toLowerCase()}`);
            setFilteredPokemon(response.data);
        } catch {
            setError("Pokémon não encontrado!");
            setFilteredPokemon(null);
        }
    };

    return (
        <MainPageContainer>
            <MainHeader onSearch={handleSearch} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <PokemonsList>
                {filteredPokemon ? ( // Se houver pesquisa, mostra apenas o Pokémon pesquisado
                    <PokemonCard 
                        key={filteredPokemon.id}
                        id={filteredPokemon.id}
                        img={filteredPokemon.sprites.front_default}
                        name={filteredPokemon.name}
                    />
                ) : (
                    pokemons.map((pokemon) => ( // Se não houver pesquisa, mostra os 20 iniciais
                        <PokemonCard 
                            key={pokemon.id}
                            id={pokemon.id}
                            img={pokemon.sprites.front_default}
                            name={pokemon.name}
                        />
                    ))
                )}
            </PokemonsList>
        </MainPageContainer>
    );
}

export default MainPage;
