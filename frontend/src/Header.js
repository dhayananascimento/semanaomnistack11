import React from 'react';

/*
    ex: <Header>Semana Omnistack</Header>
    
    function Header (props) {
        return (
            <header>
                <h1>{ props.children }</h1>
            </header>
        );
    }
*/


/*
    ex: <Header>Semana Omnistack</Header>

    function Header ({children}) {
        return (
            <header>
                <h1>{ children }</h1>
            </header>
        );
    }
*/

//ex: <Header title = "Semana Omnistack"/>
function Header (props) {
    return (
        <header>
            <h1>{ props.title }</h1>
        </header>
    );
}

export default Header;