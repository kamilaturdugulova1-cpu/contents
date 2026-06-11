import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
            <span className="navbar-brand">Static Pages</span>
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/pages/about">About</NavLink>
                <NavLink className="nav-link" to="/pages/contacts">Contacts</NavLink>
                <NavLink className="nav-link" to="/pages/divisions">Divisions</NavLink>
                <NavLink className="nav-link" to="/pages/admin">Admin</NavLink>
            </div>
        </div>
    </nav>
);
export default Navbar;