import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-nav flex-row gap-3">
                <NavLink className="nav-link" to="/Page/about">About</NavLink>
                <NavLink className="nav-link" to="/Page/contacts">Contacts</NavLink>
                <NavLink className="nav-link" to="/Page/devisions">Divisions</NavLink>
                <NavLink className="nav-link" to="/admin">Admin</NavLink>
            </div>
        </div>
    </nav>
);
export default Navbar;