
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import logo from "../../assets/Footer btn/webLogo.jpg"
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
     
      {/* For applicant links, check roles as well */}
      {user && (
        <>
          <li>
            <NavLink to="/my-applications">MyApplications</NavLink>
          </li>
        </>
      )}
      {/* For recruiter links, check roles as well */}
      {user && (
        <>
          <li>
            <NavLink to="/addJOb">Add Job</NavLink>
          </li>
          <li>
            <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
              <button>
                <img className="w-24" src={logo} alt="Job Lagbe Logo" />
              </button>
            </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
            <NavLink to="/signIn" className="btn">
              SignIn
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
