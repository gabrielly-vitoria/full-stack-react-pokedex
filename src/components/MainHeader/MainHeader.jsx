// assets:
import PokedexIcon from '../../assets/images/Title.png';

// icons:
import { IoSearchOutline } from 'react-icons/io5';
import { useState } from "react";
import { MainHeaderContainer } from './MainHeaderStyles';

function MainHeader({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm); // Chama a função passada pelo MainPage
    };

    return (
        <MainHeaderContainer>
            <div className='logo-container'>
                <img src={PokedexIcon} alt="Pokédex Logo" />
            </div>
            <div>
                <form className='input-container' onSubmit={handleSubmit}>
                    <button type='submit'>
                        <IoSearchOutline className='icon' />
                    </button>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
            </div>
        </MainHeaderContainer>
    );
};

export default MainHeader;
