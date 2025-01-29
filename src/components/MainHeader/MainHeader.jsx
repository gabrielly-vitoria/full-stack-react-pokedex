// assets:
import PokedexIcon from '../../assets/images/Title.png'

// icons:
import { IoSearchOutline } from 'react-icons/io5';
import { MainHeaderContainer } from './MainHeaderStyles';

function MainHeader() {return (
        <MainHeaderContainer>
            <div className='logo-container'>
                <img src={PokedexIcon} alt="Pokédex Logo" />
            </div>
            <div>
                <form className='input-container'>
                    <button type='submit'>
                        <IoSearchOutline className='icon' />
                    </button>
                    <input type="text" placeholder="Search" />
                </form>
            </div>
        </MainHeaderContainer>
    );
};
export default MainHeader;