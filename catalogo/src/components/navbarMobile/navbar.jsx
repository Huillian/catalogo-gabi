import React from 'react';

function Navbar({ handleFilter, toggleSidebar, sidebarOpen }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center navbar_mb">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleFilter('all')}>Todos</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleFilter('iphone')}>Iphone</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleFilter('macbook')}>Macbook</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleFilter('applewatch')}>AppleWatch</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleFilter('ipad')}>Ipad</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
