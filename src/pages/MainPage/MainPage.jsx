// components
import MainHeader from "../../components/MainHeader/MainHeader";
import PokemonsList from "../../components/PokemonsList/PokemonsList";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

// styles
import { MainPageContainer } from "./MainPageStyles";


import CharmanderPlaceholder from '../../assets/images/pokemon.png' 

function MainPage() {
    return (
        <MainPageContainer>
            <MainHeader />
            <PokemonsList>
                <PokemonCard 
                    id={'4'}
                    img={CharmanderPlaceholder}
                    name={'Charmander'}
                />
            </PokemonsList>
        </MainPageContainer>
    );
};
export default MainPage;