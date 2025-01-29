import { PokemonsListContainer } from "./PokemonsListStyles";

function PokemonsList( { children } ) {
    return (
        <PokemonsListContainer>
            { children }
        </PokemonsListContainer>
    );
};
export default PokemonsList;