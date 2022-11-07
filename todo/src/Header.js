import './Header.css';
function Header() {
    return (
        <div className="header">
            <div className="header-left">
            <img class="header-img" src="img/logo.png" alt="EKIA logo"/> 
                <div><input type="text" class="search-input" placeholder="Search..." />
                <button><i className="fas fa-search search-icon"></i></button>
                </div>
            </div>
            <div className="header-right">
                <a href='.'><i className="fas fa-user user-icon"></i></a>
                <a href='.'><i className="fas fa-heart heart-symbol"></i></a>
                <a href='.'><i className="fas fa-shopping-cart cart"></i></a>
                </div>
 </div>);
} export default Header;