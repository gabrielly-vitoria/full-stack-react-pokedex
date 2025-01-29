// styles:
import { PokemonCardWrapper } from './PokemonCardStyles';

function PokemonCard ( { id, img, name } ) {
    return (
        <PokemonCardWrapper>
            <span className='id-text'>
                #{ id }
            </span>

            <img
                className='pokemon-image'
                src={ img }
            />
            
            <span className='pokemon-title'>
                { name }
            </span>

            <div className='card-shadow'>
            </div>
        </PokemonCardWrapper>
    );
};

export default PokemonCard