import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <>
<NavLink to="/" activenavlink="NavLink--active" className="nav">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav">
        Movies
            </NavLink>
            </>

    )

}
export default Nav;