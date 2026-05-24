import React from "react";

export default function NavBar({ navegar }) {
    // Funcao para evitar o comportamento padrao do link de recarregar a pagina
    const handleClick = (e, pagina) => {
        e.preventDefault();
        navegar(pagina);
    };

    return (
        <nav>
            <ul>
                <li>
                    <a href='#home' onClick={(e) => handleClick(e, 'home')}>
                        Pagina Inicial
                    </a>
                </li>
                <li>
                    <a href='#sobre' onClick={(e) => handleClick(e, 'sobre')}>
                       Sobre
                    </a>
                </li>
                <li>
                    <a href='#cadastrar' onClick={(e) => handleClick(e, 'cadastrar')}>
                        Cadastrar Séries
                    </a>
                </li>
                <li>
                    <a href='#lista' onClick={(e) => handleClick(e, 'lista')}>
                        Lista de Séries
                    </a>
                </li>
            </ul>
        </nav>
    );
}    