const Header = () => {
    return (
    <nav className = "light-blue darken-4" style={{height: '60px'}}>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Search App (react)</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/xboxjoin/movies-appAidar">Репозиторий проекта</a></li>
            {/* <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li> */}
        </ul>
        </div>
    </nav>
    )
}

export default Header;