import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const location = useLocation(); // Get the current route

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">Jupenta</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                to="/dashboard"
                className={`menu-link ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/school-management"
                className={`menu-link ${
                  location.pathname === "/school-management" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">School Management</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/bus-management"
                className={`menu-link ${
                  location.pathname === "/bus-management" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Bus Management</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/school-selection"
                className={`menu-link ${
                  location.pathname === "/school-selection" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Route Management</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/driver-management"
                className={`menu-link ${
                  location.pathname === "/driver-management" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Driver Management</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/spmschoolselection"
                className={`menu-link ${
                  location.pathname === "/spmschoolselection" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">
                  Student/Parent Management
                </span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/notifications-management"
                className={`menu-link ${
                  location.pathname === "/notifications-management"
                    ? "active"
                    : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Notification Management</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/payment-management"
                className={`menu-link ${
                  location.pathname === "/payment-management" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Payment Management</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/admin-dashboard"
                className={`menu-link ${
                  location.pathname === "/admin-dashboard" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Admin Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
