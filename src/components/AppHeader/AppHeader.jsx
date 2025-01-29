import './AppHeader.css'
import Teste from '../Teste/Teste'

function AppHeader() {
    return (
        <header id="app-header">
            <h1>
                React Pokédex!
            </h1>
            <p>
                parágrafo teste
            </p>
            <Teste/>
            
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Apoie
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Créditos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default AppHeader