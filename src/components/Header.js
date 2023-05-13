import './Components.css';

/*
    This component renders the header of my page.
    The header contains a logo and a simple navbar with links.
    The stylesheet is defined in the Components.css file.
*/

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Logo</h1>
                    <nav className="navbar">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;