const Header = () => {
    return (
    <nav className = "light-blue darken-4" style={{height: '60px'}}>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">React movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Repositories</a></li>
            {/* <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li> */}
        </ul>
        </div>
    </nav>
    )
}

export default Header;